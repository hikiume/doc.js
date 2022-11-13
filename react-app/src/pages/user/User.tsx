import React, { useEffect, useRef, useState } from "react"
import { auth } from "config/firebase"
import noImage from "assets/no-image.jpeg"
import { ButtonBlue } from "styles/mui/Button"
import { useUser } from "hooks/useUser"

export const User = () => {
  const [file, setFile] = useState<File | null>(null)
  const [path, setPath] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)
  const { updateUserProfile } = useUser()

  useEffect(() => {
    setPath(`${auth.currentUser?.photoURL}`)
  }, [auth])

  const inputClick = () => inputRef.current?.click()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e !== null && e.target !== null && e.target.files !== null) {
      setPath(URL.createObjectURL(e.target.files[0]))
      setFile(e.target.files[0])
    }
  }

  const onClick = () => {
    if (file) updateUserProfile({ photo: file })
    setFile(null)
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mt-16">
        <div>
          <div className="flex">
            <button
              className="w-16 h-16 bg-white rounded-full"
              onClick={inputClick}
            >
              <img
                src={path}
                alt="user icon"
                onError={(e) => (e.currentTarget.src = noImage)}
                className="rounded-full object-cover aspect-square"
              />
            </button>
            <input
              ref={inputRef}
              type="file"
              onChange={(e) => onChange(e)}
              hidden
            />
          </div>
        </div>
        <div className="ml-4">
          <p>{auth.currentUser?.displayName}</p>
          <p className="text-xs text-gray-600">id: {auth.currentUser?.uid}</p>
        </div>
      </div>
      <div className="flex justify-center">
        {file ? <ButtonBlue onClick={onClick}>Uplaod</ButtonBlue> : null}
      </div>
    </div>
  )
}
