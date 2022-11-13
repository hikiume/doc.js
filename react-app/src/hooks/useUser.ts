import { auth, db, storage } from "config/firebase"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth"
import {
  onDisconnect,
  onValue,
  ref as databaseRef,
  set,
} from "firebase/database"
import {
  getDownloadURL,
  ref,
  StorageReference,
  uploadBytes,
} from "firebase/storage"
import { alert } from "function/alert"
import { useEffect, useState } from "react"

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

  const loginWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch {
      return alert("not login")
    }
  }

  type UpdateUserProfile = {
    displayName?: string
    photo?: File
    oldFileRef?: StorageReference | null
  }

  const updateUserProfile = async ({
    displayName,
    photo,
  }: UpdateUserProfile) => {
    if (!auth.currentUser) return alert("not login")
    try {
      if (displayName)
        await updateProfile(auth.currentUser, {
          displayName,
        })
      if (photo) {
        const storageRef = ref(storage, `${new Date().getTime()}/${photo.name}`)
        await uploadBytes(storageRef, photo)
        ref(
          storage,
          `gs://doc-js-app.appspot.com/${auth.currentUser?.photoURL}`
        )
        const url = await getDownloadURL(storageRef)
        console.log(url)
        await updateProfile(auth.currentUser, {
          photoURL: url,
        })
      }
    } catch (e) {
      console.log(e)
      return alert("error")
    }
  }

  type ConnectionUser = {
    id: string
    photo: string
  }

  const [connecitonUser, setConnectionUser] = useState<ConnectionUser[]>([])
  const workspaceConnection = (id: string, photo: string | null) => {
    const statusRef = databaseRef(db, `status/${id}`)
    set(statusRef, { id, photo })
    onDisconnect(statusRef).remove()

    const starCountRef = databaseRef(db, "status")
    onValue(starCountRef, (snapshot) => {
      let list: any = []
      for (const key in snapshot.val()) {
        list.push(snapshot.val()[key])
      }
      setConnectionUser(list)
    })
  }

  return {
    user,
    connecitonUser,
    loginWithEmail,
    updateUserProfile,
    workspaceConnection,
  }
}
