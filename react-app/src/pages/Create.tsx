import { CreateNoteForm } from 'components/note/CreateNoteForm'
import { Editor } from 'components/Editor'
import { useState } from 'react'
import { EditorState } from 'draft-js'
import { CreateTagForm } from 'components/tag/CreateTagForm'

export const Create = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  return (
    <div className="flex justify-center">
      <div className="flex flex-col mx-auto">
        <div className="bg-white mb-2 p-4 rounded mt-8">
          <div className="my-4">
            <CreateTagForm />
          </div>
          <CreateNoteForm editorState={editorState} />
        </div>
        <div className="flex justify-center">
          <Editor editorState={editorState} setEditorState={setEditorState} />
        </div>
      </div>
    </div>
  )
}
