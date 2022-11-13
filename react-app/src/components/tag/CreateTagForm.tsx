import { TextField } from "@mui/material"
import { useTag } from "hooks/useTag"
import { useState } from "react"
import { ButtonBlue } from "styles/mui/Button"
import { Tag } from "types"

export const CreateTagForm = () => {
  const [tagName, setTagName] = useState<Tag["name"]>("")
  const { createTag } = useTag()

  const onClick = async () => {
    if (tagName === "") return alert("hmm")
    await createTag(tagName)
  }

  return (
    <div className="flex items-center space-x-5">
      <TextField
        id="outlined-basic"
        label="tag name"
        variant="outlined"
        value={tagName}
        onChange={(e) => setTagName(e.currentTarget.value)}
      />
      <ButtonBlue onClick={onClick}>CREATE</ButtonBlue>
    </div>
  )
}
