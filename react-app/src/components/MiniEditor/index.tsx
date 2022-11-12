import { Editor as DraftEditor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { BlockStyleControles } from './BlockStyleControles'
import { BlockStyleFn } from './BlockStyleFn'

type Props = {
  editorState: EditorState
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
}

export const MiniEditor = ({ editorState, setEditorState }: Props) => {
  return (
    <div>
      <div className="flex mb-2">
        <div className="ml-auto flex space-x-5">
          <BlockStyleControles
            editorState={editorState}
            setEditorState={setEditorState}
          />
        </div>
      </div>
      <div className="w-[320px] prose prose-stone bg-white p-2 rounded">
        <DraftEditor
          editorState={editorState}
          onChange={setEditorState}
          blockStyleFn={BlockStyleFn}
          placeholder="Tell a story..."
        />
      </div>
    </div>
  )
}
