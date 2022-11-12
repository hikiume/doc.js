import { atom } from 'recoil'
import { Note, NoteComment, Tag } from 'types'

export const noteAtom = atom<Note[] | null>({
  key: 'noteAtom',
  default: null,
})

export const tagAtom = atom<Tag[] | null>({
  key: 'tagAtom',
  default: null,
})

export const noteCommentAtom = atom<NoteComment[] | null>({
  key: 'noteCommentAtom',
  default: null,
})
