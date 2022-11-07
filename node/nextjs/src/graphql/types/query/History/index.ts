import { extendType, nonNull, stringArg } from "nexus"

export const NoteHistory = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("NoteHistory", {
      type: "NoteHistory",
      args: {
        noteId: nonNull(stringArg())
      },
      async resolve(_, { noteId }, { prisma }) {
        const noteHistory = await prisma.noteHistory.findMany({
          where: {
            noteId,
          }
        })
        console.log(noteHistory)
        return noteHistory
      }
    })
  },
})
