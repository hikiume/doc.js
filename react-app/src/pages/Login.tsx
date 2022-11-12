import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { useUser } from 'hooks/useUser'
import { alert } from 'function/alert'
import { ButtonBlue } from 'styles/mui/Button'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loginWithEmail } = useUser()

  const onClick = async () => {
    if (email === '' || password === '') {
      return alert('no set name or password')
    }

    await loginWithEmail(email, password)
  }

  return (
    <>
      <h1>ログインページ</h1>
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <ButtonBlue onClick={onClick}>CREATE</ButtonBlue>
    </>
  )
}
