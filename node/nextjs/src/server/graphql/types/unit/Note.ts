import { objectType } from "nexus"

export const NoteUnit = objectType({
  name: "Note",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.string("title")
    t.nonNull.string("body")
    t.nonNull.string("tagId")
  },
})