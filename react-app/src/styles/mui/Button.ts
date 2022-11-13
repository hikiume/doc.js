import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

export const ButtonBlue = styled(Button)({
  textTransform: "none",
  color: "white",
  backgroundColor: "#0070F3",
  "&:hover": {
    backgroundColor: "#0070F3",
    boxShadow: "0 6px 20px rgb(93 93 93 / 23%)",
  },
})
