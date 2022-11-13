import { useState } from "react"
import TextField from "@mui/material/TextField"
import { useUser } from "hooks/useUser"
import { alert } from "function/alert"
import { ButtonBlue } from "styles/mui/Button"
import { Link } from "@mui/material"
import { InputPassword } from "components/atoms/InputPassword"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { loginWithEmail } = useUser()

  const onClick = async () => {
    if (email === "" || password === "") return alert("no set name or password")
    await loginWithEmail(email, password)
  }

  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl">welcome! doc.js</h1>
      <p className="mb-2">
        It's a beta version, so the whole record may be blown XD
        <br />
        By the way, all DeepL translations
      </p>
      <p>
        github: {` `}
        <Link href="https://github.com/kazuki-lv12/doc.js" target="_blank">
          https://github.com/kazuki-lv12/doc.js
        </Link>
      </p>
      <p className="mb-2">
        document: {` `}
        <Link href="#" target="_blank">
          #
        </Link>
      </p>
      <div className="mb-2">
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div className="mb-2">
        <InputPassword
          label="password"
          state={password}
          setState={setPassword}
        />
      </div>
      <div>
        <ButtonBlue onClick={onClick}>Login</ButtonBlue>
      </div>
    </div>
  )
}
