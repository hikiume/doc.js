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
      async resolve(_, { title, tagId }, { prisma }) {
        try {
          await prisma.note.create({
            data: {
              title,
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
