import { makeVar } from "@apollo/client"
import { Note } from "hooks/generated"

// export const alertVar = makeVar<Alert | null>(null)
export const noteListVar = makeVar<Note[]>([])