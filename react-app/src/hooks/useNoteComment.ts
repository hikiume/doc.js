import { store } from 'config/firebase'
import { noteCommentAtom } from 'context'
import {
  addDoc,
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Note } from 'types'
import { useUser } from './useUser'

type Props = {
  id: Note['id']
}

export const useNoteComment = ({ id }: Props) => {
  const [messageList, setMessageList] = useRecoilState(noteCommentAtom)
  const { user } = useUser()

  useEffect(() => {
    ;(async () => {
      await getNoteComment(id)
    })()
  }, [id])

  const getNoteComment = async (id: string) => {
    const list: any[] = []
    const querySnapshot = await getDocs(
      query(collection(store, 'noteComment'), where('noteId', '==', id))
    )
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() })
    })
    setMessageList(list)
  }

  const createNoteComment = async (noteId: string, message: string) => {
    const noteComment = {
      userId: user?.uid,
      noteId,
      body: message,
      createAt: Timestamp.now(),
    }

    await addDoc(collection(store, 'noteComment'), noteComment)
    await getNoteComment(id)
  }

  const deleteNoteComment = () => {}

  const editNoteComment = () => {}

  return {
    messageList,
    createNoteComment,
    deleteNoteComment,
    editNoteComment,
  }
}
