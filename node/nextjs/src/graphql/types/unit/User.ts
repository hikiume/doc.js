import { objectType } from "nexus"

export const UserUnit = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id")
    t.nonNull.string("name")
    t.nonNull.string("password")
    t.nonNull.string("icon")
    t.nonNull.field("createdAt", {
      type: "DateTime",
    })
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    })
  },
})
