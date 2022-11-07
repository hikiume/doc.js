import { isLogin } from "graphql/common/auth"
import { extendType, nonNull, stringArg } from "nexus"

export const DeleteComment = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("DeleteComment", {
      type: "Message",
      args: {
        commentId: nonNull(stringArg())
      },
      async resolve(_, { commentId }, { req, prisma }) {
        const user = await isLogin({ req, prisma })

        try {
          const note = await prisma.noteComment.findUnique({
            where: {
              id: commentId,
            }
          })
          if (note?.userId !== user?.id) throw new Error("")
          await prisma.noteComment.delete({
            where: {
              id: commentId,
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