import { makeVar } from "@apollo/client"
import { Note } from "hooks/generated"
import { Alert } from "types"

export const alertVar = makeVar<Alert | null>(null)
export const noteListVar = makeVar<Note[]>([])