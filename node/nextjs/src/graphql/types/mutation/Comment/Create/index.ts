import { isLogin } from "graphql/common/auth"
import { extendType, nonNull, stringArg } from "nexus"

export const CreateComment = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("CreateComment", {
      type: "Message",
      args: {
        body: nonNull(stringArg()),
        noteId: nonNull(stringArg())
      },
      async resolve(_, { body, noteId }, { req, prisma }) {
        try {
          const user = await isLogin({ req, prisma })
          if (!user) throw new Error("")
          await prisma.noteComment.create({
            data: {
              body,
              user: {
                connect: { id: user?.id }
              },
              note: {
                connect: { id: noteId }
              }
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