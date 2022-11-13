import { ReactComponent as JavaScript } from "assets/javascript.svg"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"

type Props = {
  name: string
}

export const LangIcon = ({ name }: Props) => {
  switch (name) {
    case "JavaScript":
      return <JavaScript width={16} height={16} />
    default:
      return <ErrorOutlineIcon fontSize="small" />
  }
}
