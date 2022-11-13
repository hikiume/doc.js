import { Avatar, AvatarGroup } from "@mui/material"
import { db } from "config/firebase"
import { onValue, ref, set } from "firebase/database"
import { useUser } from "hooks/useUser"
import { useEffect, useState } from "react"

export const Workspace = () => {
  const [text, setText] = useState("")
  const { user, workspaceConnection, connecitonUser } = useUser()

  const writeUserData = (text: string) => {
    set(ref(db, "whiteboard/"), { text })
    setText(text)
  }
  useEffect(() => {
    const starCountRef = ref(db, "whiteboard/")
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      setText(data.text)
    })
    if (user) workspaceConnection(user.uid, user.photoURL)
  }, [user])

  return (
    <>
      <div className="absolute right-2 flex items-center m-4">
        <AvatarGroup max={100}>
          {connecitonUser.map((e, index) => {
            return (
              <Avatar
                key={index}
                src={e.photo}
                sx={{ width: 24, height: 24 }}
              />
            )
          })}
        </AvatarGroup>
        <h1 className="text-2xl ml-4">Workspace</h1>
      </div>
      <textarea
        name=""
        id=""
        className="flex w-full h-full border-none p-1 resize-none outline-none"
        value={text}
        onChange={(e) => writeUserData(e.currentTarget.value)}
      ></textarea>
    </>
  )
}
