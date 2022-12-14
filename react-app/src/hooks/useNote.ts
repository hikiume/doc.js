import { useEffect } from "react"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore"
import { storage, store } from "config/firebase"
import { useUser } from "./useUser"
import { alert } from "function/alert"
import { Note, Tag } from "types"
import { useRecoilState } from "recoil"
import { noteAtom } from "context"
import { ref, uploadString } from "firebase/storage"

export const useNote = () => {
  const [noteList, setNoteList] = useRecoilState(noteAtom)
  const { user } = useUser()

  useEffect(() => {
    ;(async () => {
      if (!noteList) await getNoteList()
    })()
  }, [])

  const getNote = async (noteId: string) => {
    const docRef = doc(store, "note", noteId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as unknown as Note
    } else {
      return null
    }
  }

  const getNoteList = async () => {
    const list: any[] = []
    const querySnapshot = await getDocs(query(collection(store, "note")))
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() })
    })
    setNoteList(list)
  }

  const createNote = async (
    tag: Tag,
    title: string,
    authority: boolean,
    markup: string
  ) => {
    if (!user) return alert("not login")
    const note = {
      userId: user.uid,
      tag: {
        id: tag.id,
        name: tag.name,
      },
      title,
      authority,
      createAt: Timestamp.fromDate(new Date()),
      updateAt: Timestamp.fromDate(new Date()),
    }

    const data = await addDoc(collection(store, "note"), note)
    uploadString(ref(storage, `${data.path}.json`), markup)
    await getNoteList()
  }

  const deleteNote = async (id: string) => {
    await deleteDoc(doc(store, "note", id))
    await getNoteList()
  }

  const editNote = async (noteId: string, markup: string, title: string) => {
    const washingtonRef = doc(store, "note", noteId)

    await updateDoc(washingtonRef, {
      title,
      updateAt: Timestamp.fromDate(new Date()),
    })
    uploadString(ref(storage, `note/${noteId}.json`), markup)
    await getNoteList()
  }

  return {
    noteList,
    getNoteList,
    getNote,
    createNote,
    deleteNote,
    editNote,
  }
}
