import { extendType, nonNull, stringArg } from "nexus"
import { rtn } from "graphql/common"
import { sign } from "jsonwebtoken"
import { setCookie } from "nookies"

export const UserCreate = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("UserCreate", {
      type: "Message",
      args: {
        name: nonNull(stringArg()),
        password: nonNull(stringArg()),
        password2: nonNull(stringArg()),
      },
      async resolve(_, { name, password, password2 }, { res, prisma }) {
        if (password !== password2) return rtn.f("ユーザー作成に失敗しました。")

        try {
          const user = await prisma.user.create({
            data: {
              name,
              password,
            }
          })
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
            sameSite: "none",
          })
        } catch (e) {
          console.log(e)
          return rtn.f("ユーザー作成に失敗しました。")
        }
        return rtn.t("ユーザー作成に成功しました。")
      },
    })
  },
})
