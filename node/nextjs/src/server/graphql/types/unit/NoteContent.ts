import { objectType } from "nexus"

export const NoteContentUnit = objectType({
  name: "NoteContent",
  definition(t) {
    t.nonNull.string("noteId")
    t.nonNull.string("body")
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
  },
})