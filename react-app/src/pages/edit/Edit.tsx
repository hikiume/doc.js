import { Button } from "@mui/material"
import { Editor } from "components/Editor"
import { storage } from "config/firebase"
import { convertFromRaw, convertToRaw, EditorState } from "draft-js"
import { Timestamp } from "firebase/firestore"
import { getDownloadURL, ref } from "firebase/storage"
import { alert } from "function/alert"
import { useNote } from "hooks/useNote"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ButtonBlue } from "styles/mui/Button"
import { Note as NoteType } from "types"

export const Edit = () => {
  const [note, setNote] = useState<NoteType | null>(null)
  const [title, setTitle] = useState("")
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const params = useParams()
  const { getNote, editNote, deleteNote } = useNote()

  useEffect(() => {
    ;(async () => {
      const note = await getNote(params["*"] || "")
      setNote(note)
      setTitle(note?.title || "")
      try {
        const starsRef = ref(storage, `note/${note?.id}.json`)
        const data = await getDownloadURL(starsRef)
        const res = await fetch(data)
        const initData = convertFromRaw(await res.json())
        const initState = EditorState.createWithContent(initData)
        setEditorState(initState)
      } catch (e) {
        alert("Content could not be retrieved.")
      }
    })()
  }, [params])

  const onClick = async () => {
    if (!note?.id) return
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    await editNote(note?.id, JSON.stringify(rawContentState), title)
  }

  const onDelete = async () => {
    if (!note?.id) return
    await deleteNote(note?.id)
  }

  const date = new Timestamp(note?.createAt.seconds, note?.createAt.nanoseconds)
    .toDate()
    .toDateString()

  return (
    <div className="flex flex-col w-[960px] mx-auto">
      <div className="text-center">
        <textarea
          className="border-none p-1 resize-none outline-none text-center text-4xl font-black my-8"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>
      <p className="text-end mb-4">{date}</p>
      <div className="text-end mb-4">
        <ButtonBlue onClick={onClick}>UPDATE</ButtonBlue>
      </div>
      <div className="flex justify-center pb-12">
        <Editor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <div className="text-center">
        <Button
          sx={{
            color: "white",
            backgroundColor: "#ff8484",
            "&:hover": {
              backgroundColor: "#ff2f2f",
            },
          }}
          onClick={onDelete}
        >
          DELETE
        </Button>
      </div>
    </div>
  )
}
