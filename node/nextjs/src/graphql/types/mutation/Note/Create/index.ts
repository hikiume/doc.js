import { isLogin } from "graphql/common/auth"
import { extendType, nonNull, stringArg } from "nexus"

export const CreateNote = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("CreateNote", {
      type: "Message",
      args: {
        title: nonNull(stringArg()),
        tagId: nonNull(stringArg())
      },
      async resolve(_, { title, tagId }, { req, prisma }) {
        const user = await isLogin({ req, prisma })

        try {
          await prisma.note.create({
            data: {
              title,
              user: {
                connect: { id: user?.id }
              },
              tag: {
                connect: [{
                  id: tagId
                }]
              },
              noteContent: {
                create: {
                  body: ""
                }
              }
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
