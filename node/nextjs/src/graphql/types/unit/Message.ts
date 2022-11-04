import { objectType } from "nexus"

export const Message = objectType({
  name: "Message",
  definition(t) {
    t.nonNull.string("body")
    t.nonNull.string("code")
    t.nonNull.boolean("error")
  },
})
