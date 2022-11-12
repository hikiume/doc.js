import { db } from 'config/firebase'
import { onValue, ref, set } from 'firebase/database'
import { useEffect, useState } from 'react'

export const Workspace = () => {
  const [text, setText] = useState('')

  const writeUserData = (text: string) => {
    set(ref(db, 'whiteboard/'), { text })
    setText(text)
  }

  useEffect(() => {
    const starCountRef = ref(db, 'whiteboard/')
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      setText(data.text)
    })
  }, [])

  return (
    <>
      <h1>Workspace</h1>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        value={text}
        onChange={(e) => writeUserData(e.currentTarget.value)}
      ></textarea>
    </>
  )
}
