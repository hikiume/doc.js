import { objectType } from "nexus"

export const NoteUnit = objectType({
  name: "Note",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.string("title")
    t.nonNull.string("body")
    t.string("tagId")
    t.nonNull.boolean("delete")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
  },
})