import { objectType } from "nexus"

export const TagUnit = objectType({
  name: "Tag",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.string("name")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
  },
})