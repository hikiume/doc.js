import { Dispatch, MouseEvent, SetStateAction, useState } from "react"
import IconButton from "@mui/material/IconButton"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import FormControl from "@mui/material/FormControl"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { OutlinedInput } from "@mui/material"

type Props = {
  label: string
  state: string
  setState: Dispatch<SetStateAction<string>>
}

export const InputPassword = ({ label, state, setState }: Props) => {
  const [show, setShow] = useState<boolean>(false)
  const handleShowPassword = () => setShow(!show)
  const mouseDown = (e: MouseEvent<HTMLButtonElement>) => e.preventDefault()

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={show ? "text" : "password"}
        value={state}
        onChange={(e) => setState(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              onMouseDown={mouseDown}
              edge="end"
            >
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  )
}
