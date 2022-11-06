import { extendType, nonNull, stringArg } from "nexus"
import { rtn } from "graphql/common"
import { sign } from "jsonwebtoken"
import { setCookie } from "nookies"

export const UserLogin = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("UserLogin", {
      type: "Message",
      args: {
        name: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_, { name, password }, { res, prisma }) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              name,
            },
          })
          if (user?.password !== password) throw new Error("not password")
          const jwtSecretKey = process.env.JWT_SECRET_KEY || ""
          const payload = {
            id: user.id
          }
          const jwt = sign(payload, jwtSecretKey)
          setCookie({ res }, "KEY", jwt, {
            maxAge: 100000000,
            // httpOnly: true,
            // secure: true,
            // path: "/",
            // sameSite: "none",
          })
        } catch (e) {
          console.log(e)
          return rtn.f("ログインに失敗しました。")
        }
        return rtn.t("ログインに成功しました。")
      },
    })
  },
})
