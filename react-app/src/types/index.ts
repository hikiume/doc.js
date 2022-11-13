export type User = {
  id: string
}

export type Tag = {
  id: string
  userId: User["id"]
  name: string
  createAt: any
  updateAt: any
}

export type Note = {
  id: string
  userId: User["id"]
  tag: {
    id: Tag["id"]
    name: Tag["name"]
  }
  title: string
  authority: boolean
  createAt: any
  updateAt: any
}

export type NoteComment = {
  id: string
  noteId: Note["id"]
  user: {
    id: User["id"]
    photo: string
  }
  body: string
  createAt: any
  updateAt: any
}
