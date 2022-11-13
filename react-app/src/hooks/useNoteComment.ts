import { store } from "config/firebase"
import { noteCommentAtom } from "context"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { Note } from "types"
import { useUser } from "./useUser"

type Props = {
  id: Note["id"]
}

export const useNoteComment = ({ id }: Props) => {
  const [messageList, setMessageList] = useRecoilState(noteCommentAtom)
  const { user } = useUser()

  useEffect(() => {
    ;(async () => await getNoteComment(id))()
  }, [id])

  const getNoteComment = async (id: string) => {
    onSnapshot(
      query(
        collection(store, "noteComment"),
        where("noteId", "==", id),
        orderBy("createAt", "asc")
      ),
      (querySnapshot) => {
        let list: any[] = []
        querySnapshot.forEach((doc) => {
          list = [...list, { id: doc.id, ...doc.data() }]
        })
        setMessageList(list)
      }
    )
  }

  const createNoteComment = async (noteId: string, message: string) => {
    const noteComment = {
      user: {
        id: user?.uid,
        photo: user?.photoURL,
      },
      noteId,
      body: message,
      createAt: Timestamp.now(),
    }

    await addDoc(collection(store, "noteComment"), noteComment)
    await getNoteComment(id)
  }

  const deleteNoteComment = async (id: string) => {
    await deleteDoc(doc(store, "noteComment", id))
  }

  return {
    messageList,
    createNoteComment,
    deleteNoteComment,
  }
}
