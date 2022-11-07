import { extendType, nonNull, stringArg } from "nexus"

export const DeleteTag = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("DeleteTag", {
      type: "Message",
      args: {
        tagId: nonNull(stringArg()),
      },
      async resolve(_, { tagId }, { prisma }) {
        try {
          await prisma.tag.delete({
            where: {
              id: tagId,
            },
          })
        } catch (e) {
          return {
            body: "不成功っぴ！",
            code: "",
            error: true
          }
        }

        return {
          body: "成功っぴ！",
          code: "",
          error: false
        }
      },
    })
  },
})
