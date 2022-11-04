import { list, nonNull, objectType } from "nexus"

export const NoteUnit = objectType({
  name: "Note",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.string("title")
    t.nonNull.boolean("delete")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
    t.nonNull.field("tag", {
      type: nonNull(list("Tag"))
    })
  },
})