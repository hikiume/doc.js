import { useNoteQuery } from "./generated";

export const useNoteState = (id?: string) => {
  const noteList = useNoteQuery();
  const note = useNoteQuery({ variables: { noteId: id } })

  const query = id ? note : noteList
  const { data, refetch } = query

  return { data, refetch }
}