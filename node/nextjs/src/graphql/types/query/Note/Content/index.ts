import { extendType, nonNull, stringArg } from "nexus"

export const NoteContent = extendType({
  type: "Query",
  definition(t) {
    t.field("NoteContent", {
      type: "NoteContent",
      args: {
        noteId: nonNull(stringArg())
      },
      async resolve(_, { noteId }, { prisma }) {
        const note = await prisma.noteContent.findUnique({
          where: {
            noteId,
          },
        })
        return note
      }
    })
  },
})
