import { extendType, nonNull, stringArg } from "nexus"

export const User = extendType({
  type: "Query",
  definition(t) {
    t.field("User", {
      type: "User",
      args: {
        id: nonNull(stringArg())
      },
      async resolve(_, { id }, { prisma }) {
        const user = await prisma.user.findUnique({
          where: {
            id,
          }
        })
        return user
      }
    })
  },
})