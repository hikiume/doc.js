import { extendType, stringArg } from "nexus"

export const Tag = extendType({
  type: "Query",
  definition(t) {
    t.list.nonNull.field("Tag", {
      type: "Tag",
      async resolve(_, {  }, { prisma }) {
        const tag = await prisma.tag.findMany()
        return tag
      }
    })
  },
})