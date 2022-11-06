import { extendType, nonNull, stringArg } from "nexus"

export const UserList = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("UserList", {
      type: "User",
      async resolve(_, { }, { prisma }) {
        const user = await prisma.user.findMany()
        return user
      }
    })
  },
})