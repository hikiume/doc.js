import { isLogin } from "graphql/common/auth"
import { extendType, nonNull, stringArg } from "nexus"

export const EditComment = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("EditComment", {
      type: "Message",
      args: {
        commentId: nonNull(stringArg()),
        body: nonNull(stringArg())
      },
      async resolve(_, { commentId, body }, { req, prisma }) {
        const user = await isLogin({ req, prisma })

        try {
          const note = await prisma.noteComment.findUnique({
            where: {
              id: commentId,
            }
          })
          if (note?.userId !== user?.id) throw new Error("")
          await prisma.noteComment.update({
            where: {
              id: commentId,
            },
            data: {
              body,
            }
          })
        } catch {
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