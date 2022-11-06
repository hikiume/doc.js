import { verify } from "jsonwebtoken"
import { extendType, nonNull, stringArg } from "nexus"
import { parseCookies } from "nookies"
import { Token } from "types"

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
        const jwtSecretKey = process.env.JWT_SECRET_KEY || ""
        const cookie = parseCookies({ req })["KEY"]
        try {
          const jwt = verify(cookie, jwtSecretKey) as Token
          const user = await prisma.user.findUnique({
            where: {
              id: jwt.id
            }
          })
          if (!user) throw new Error("")
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
