import { verify } from "jsonwebtoken"
import { extendType  } from "nexus"
import { parseCookies } from "nookies"
import { Token } from "types"

export const UserState = extendType({
  type: "Query",
  definition(t) {
    t.field("UserState", {
      type: "User",
      async resolve(_, { }, { req, prisma }) {
        const jwtSecretKey = process.env.JWT_SECRET_KEY || ""
        const cookie = parseCookies({ req })["KEY"]
        try {
          const jwt = verify(cookie, jwtSecretKey) as Token
          const user = await prisma.user.findUnique({
            where: {
              id: jwt.id
            }
          })
          return user
        } catch {
          return null
        }
      }
    })
  },
})