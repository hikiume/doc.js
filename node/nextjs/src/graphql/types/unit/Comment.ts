import { objectType } from "nexus"

export const CommentObject = objectType({
  name: "Comment",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.string("noteId")
    t.nonNull.string("userId")
    t.nonNull.string("body")
    t.nonNull.boolean("delete")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
  },
})
