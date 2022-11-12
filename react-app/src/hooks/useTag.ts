import { store } from 'config/firebase'
import {
  addDoc,
  collection,
  getDocs,
  query,
  Timestamp,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { useUser } from './useUser'
import { useRecoilState } from 'recoil'
import { tagAtom } from 'context'

export const useTag = () => {
  const [tagList, setTagList] = useRecoilState(tagAtom)
  const { user } = useUser()

  useEffect(() => {
    ;(async () => {
      if (!tagList) await getTag()
    })()
  }, [])

  const getTag = async () => {
    const list: any[] = []
    const querySnapshot = await getDocs(query(collection(store, 'tag')))
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() })
    })
    setTagList(list)
  }

  const createTag = async (name: string) => {
    if (!user) return alert('not login')
    const tag = {
      userId: user.uid,
      name,
      createAt: Timestamp.now(),
      updateAt: Timestamp.now(),
    }

    await addDoc(collection(store, 'tag'), tag)
    await getTag()
  }

  const deleteTag = () => {}
  const editTag = () => {}

  return {
    tagList: tagList || [],
    createTag,
    deleteTag,
    editTag,
    getTag,
  }
}
