export type User = {
  id: string
  name: string
  icon: string
  createAt: any
  updateAt: any
}

export type Tag = {
  id: string
  userId: User['id']
  name: string
  createAt: any
  updateAt: any
}

export type Note = {
  id: string
  userId: User['id']
  tag: {
    id: Tag['id']
    name: Tag['name']
  }
  title: string
  authority: boolean
  createAt: any
  updateAt: any
}

export type NoteComment = {
  id: string
  noteId: Note['id']
  userId: User['id']
  body: string
  createAt: any
  updateAt: any
}
