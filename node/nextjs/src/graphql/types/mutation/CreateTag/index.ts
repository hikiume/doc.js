import { extendType, nonNull, stringArg } from "nexus"

export const CreateTag = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("CreateTag", {
      type: "Message",
      args: {
        tagName: nonNull(stringArg()),
      },
      async resolve(_, { tagName }, { prisma }) {
        try {
          await prisma.tag.create({
            data: {
              name: tagName
            }
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
