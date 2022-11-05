import { alertVar } from "reactive"
import { Message } from "hooks/generated"

export const alert = {
  view: (result: Message | undefined) => {
    if (!result) return
    alertVar({
      severity: result.error ? "error" : "success",
      text: result.body,
    })
  },
  hidden: () => alertVar(null),
}
