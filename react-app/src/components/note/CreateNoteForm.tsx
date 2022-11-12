import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from '@mui/material'
import { convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { alert } from 'function/alert'
import { useNote } from 'hooks/useNote'
import { useTag } from 'hooks/useTag'
import { useState } from 'react'
import { ButtonBlue } from 'styles/mui/Button'
import { Note, Tag } from 'types'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

type Props = {
  editorState: EditorState
}

export const CreateNoteForm = ({ editorState }: Props) => {
  const [tagId, setTagId] = useState<Tag['id']>('')
  const [title, setTitle] = useState<Note['title']>('')
  const [authority, setAuthority] = useState<Note['authority']>(false)
  const { createNote } = useNote()
  const { tagList } = useTag()

  const onClick = async () => {
    if (tagId === '' || title === '') return alert('hmm')
    const tag = tagList.filter((e) => e.id === tagId)[0]
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    const markup = draftToHtml(rawContentState)
    await createNote(tag, title, authority, markup)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setTagId(event.target.value as string)
  }

  return (
    <div className="flex items-center space-x-5">
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <FormControl>
        <InputLabel id="tag">Tag</InputLabel>
        <Select
          labelId="tag"
          id="tag-selecter"
          value={tagId}
          label="Tag"
          onChange={handleChange}
          className="w-[150px]"
        >
          {tagList.map((tag) => (
            <MenuItem key={tag.id} value={tag.id}>
              {tag.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="flex flex-col items-center">
        <h2>authority?</h2>
        <Switch
          {...label}
          value={authority}
          onChange={(e) => setAuthority(e.target.checked)}
        />
      </div>
      <div>
        <ButtonBlue onClick={onClick}>CREATE</ButtonBlue>
      </div>
    </div>
  )
}
