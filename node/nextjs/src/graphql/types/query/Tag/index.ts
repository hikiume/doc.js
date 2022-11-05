import { extendType } from "nexus"

export const Tag = extendType({
  type: "Query",
  definition(t) {
    t.list.nonNull.field("Tag", {
      type: "Tag",
      async resolve(_, { }, { prisma }) {
        const tag = await prisma.tag.findMany({
          where: {
            delete: false
          }
        })
        return tag
      }
    })
  },
})