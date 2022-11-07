import { extendType, stringArg } from "nexus"

export const Comment = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("Comment", {
      type: "Comment",
      async resolve(_, { }, { prisma }) {
        const comment = await prisma.noteComment.findMany()
        return comment
      }
    })
  },
})
