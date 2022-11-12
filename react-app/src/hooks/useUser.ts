import { auth } from 'config/firebase'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'
import { alert } from 'function/alert'
import { useEffect, useState } from 'react'

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
      return alert('not login')
    }
  }

  return {
    user,
    loginWithEmail,
  }
}
