import { MiniEditor } from 'components/MiniEditor'
import { storage } from 'config/firebase'
import { convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'
import { useNote } from 'hooks/useNote'
import { useNoteComment } from 'hooks/useNoteComment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ButtonBlue } from 'styles/mui/Button'
import { Note as NoteType } from 'types'

export const Note = () => {
  const [note, setNote] = useState<NoteType | null>(null)
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const [html, setHtml] = useState('')
  const params = useParams()
  const { getNote } = useNote()
  const { createNoteComment, messageList } = useNoteComment({
    id: params['*'] || '',
  })

  useEffect(() => {
    ;(async () => {
      const note = await getNote(params['*'] || '')
      setNote(note)
      try {
        const starsRef = ref(storage, `note/${note?.id}.html`)
        const data = await getDownloadURL(starsRef)
        await fetch(data)
          .then(async (response) => {
            setHtml(await response.text())
          })
          .catch((error) => {})
      } catch (e) {}
    })()
  }, [params])

  const onClick = async () => {
    if (typeof params['*'] !== 'string') return
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    const markup = draftToHtml(rawContentState)
    await createNoteComment(params['*'], markup)
  }

  const date = new Timestamp(note?.createAt.seconds, note?.createAt.nanoseconds)
    .toDate()
    .toDateString()

  return (
    <div className="flex flex-col w-[960px] mx-auto">
      <h1 className="text-center text-4xl py-8 font-black">{note?.title}</h1>
      <p className="text-end mb-4">{date}</p>
      <div className="flex">
        <div className="m-2 p-2 bg-white rounded">
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="prose prose-stone w-[580px]"
          />
        </div>
        <div className="ml-4">
          {messageList?.map((message, index) => {
            return (
              <div key={index}>
                <div
                  dangerouslySetInnerHTML={{ __html: message.body }}
                  className="prose prose-stone"
                />
              </div>
            )
          })}
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
