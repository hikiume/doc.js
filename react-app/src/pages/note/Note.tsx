import { Button } from "@mui/material"
import { MiniEditor } from "components/MiniEditor"
import { auth, storage } from "config/firebase"
import { convertToRaw, EditorState } from "draft-js"
import draftToHtml from "draftjs-to-html"
import { Timestamp } from "firebase/firestore"
import { getDownloadURL, ref } from "firebase/storage"
import { alert } from "function/alert"
import { useNote } from "hooks/useNote"
import { useNoteComment } from "hooks/useNoteComment"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ButtonBlue } from "styles/mui/Button"
import { Note as NoteType } from "types"
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline"
import DeleteIcon from "@mui/icons-material/Delete"

export const Note = () => {
  const [note, setNote] = useState<NoteType | null>(null)
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const [html, setHtml] = useState("")
  const params = useParams()
  const { getNote } = useNote()
  const { createNoteComment, messageList, deleteNoteComment } = useNoteComment({
    id: params["*"] || "",
  })

  useEffect(() => {
    ;(async () => {
      const note = await getNote(params["*"] || "")
      setNote(note)
      try {
        const starsRef = ref(storage, `note/${note?.id}.json`)
        const data = await getDownloadURL(starsRef)
        const res = await fetch(data)
        const markup = draftToHtml(await res.json())
        setHtml(markup)
      } catch (e) {
        alert("Content could not be retrieved.")
        setHtml("Content could not be retrieved.")
      }
    })()
  }, [params])

  const onClick = async () => {
    if (typeof params["*"] !== "string") return
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    const markup = draftToHtml(rawContentState)
    await createNoteComment(params["*"], markup)
  }

  const date = new Timestamp(note?.createAt.seconds, note?.createAt.nanoseconds)
    .toDate()
    .toDateString()

  const onDeleteComment = (id: string) => {
    deleteNoteComment(id)
  }

  const disabled = auth.currentUser?.uid === note?.userId

  return (
    <div className="flex flex-col w-[960px] mx-auto">
      <h1 className="text-center text-4xl py-8 font-black">{note?.title}</h1>
      <p className="text-end mb-4">{date}</p>
      {disabled ? (
        <div className="text-end mb-4">
          <Link to={`/edit/${note?.id}`}>
            <Button>
              <div className="mr-2">
                <ModeEditOutlineIcon />
              </div>
              EDIT
            </Button>
          </Link>
        </div>
      ) : null}
      <div className="flex">
        <div className="mb-12 p-2 bg-white rounded self-start">
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="prose prose-stone w-[580px] note"
          />
        </div>
        <div className="ml-4 self-start">
          <div className="mb-4">
            {messageList?.map((message, index) => {
              const date = new Timestamp(
                message?.createAt.seconds,
                message?.createAt.nanoseconds
              )
                .toDate()
                .toDateString()
              return (
                <div key={index}>
                  <div className="flex items-center">
                    <div className="flex w-4 h-4 mr-2 rounded-full">
                      <img
                        src={message.user.photo}
                        alt=""
                        className="rounded-full object-cover aspect-square"
                      />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: message.body }}
                      className="prose prose-stone note"
                    />
                  </div>
                  <div className="flex justify-end items-center">
                    <p className="text-xs text-gray-700 mr-2">
                      {date.slice(4).slice(0, -4)}
                    </p>
                    <DeleteIcon
                      fontSize="small"
                      sx={{
                        color: "gray",
                        cursor: "pointer",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                      onClick={() => onDeleteComment(message.id)}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <MiniEditor
            editorState={editorState}
            setEditorState={setEditorState}
          />
          <div className="flex justify-center my-2">
            <ButtonBlue onClick={onClick}>SEND</ButtonBlue>
          </div>
        </div>
      </div>
    </div>
  )
}
