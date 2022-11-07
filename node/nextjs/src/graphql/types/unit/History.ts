import { objectType } from "nexus"

export const NoteHistoryObject = objectType({
  name: "NoteHistory",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.string("noteId")
    t.nonNull.string("userId")
    t.nonNull.string("body")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
  },
})