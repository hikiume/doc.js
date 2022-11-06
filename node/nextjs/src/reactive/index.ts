import { makeVar } from "@apollo/client"
import { Note, User } from "hooks/generated"
import { Alert } from "types"

export const userVar = makeVar<User | null | undefined>(undefined)
export const alertVar = makeVar<Alert | null>(null)
export const noteListVar = makeVar<Note[]>([])