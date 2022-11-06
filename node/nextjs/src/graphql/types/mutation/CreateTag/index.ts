import { verify } from "jsonwebtoken"
import { extendType, nonNull, stringArg } from "nexus"
import { parseCookies } from "nookies"
import { Token } from "types"

export const CreateTag = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("CreateTag", {
      type: "Message",
      args: {
        tagName: nonNull(stringArg()),
      },
      async resolve(_, { tagName }, { req, prisma }) {
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
          await prisma.tag.create({
            data: {
              name: tagName,
              user: {
                connect: { id: user?.id }
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
