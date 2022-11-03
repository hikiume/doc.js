import { extendType, nonNull, stringArg } from "nexus"

export const DeleteNote = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("DeleteNote", {
      type: "Message",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_, { id }, { prisma }) {
        try {
          await prisma.note.update({
            where: {
              id,
            },
            data: {
              delete: true
            }
          })
        } catch (e) {
          console.log(e)
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
