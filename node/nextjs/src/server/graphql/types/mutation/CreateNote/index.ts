import { extendType, nonNull, stringArg } from "nexus"

export const CreateNote = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("CreateNote", {
      type: "Message",
      args: {
        title: nonNull(stringArg()),
        tag: nonNull(stringArg()),
      },
      async resolve(_, { title, tag }, { prisma }) {
        return {
          body: title + tag,
          code: "",
          error: false
        }
      },
    })
  },
})
