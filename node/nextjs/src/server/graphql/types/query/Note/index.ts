import { extendType, stringArg } from "nexus"

export const Note = extendType({
  type: "Query",
  definition(t) {
    t.list.nonNull.field("Note", {
      type: "Note",
      args: {
        noteId: stringArg()
      },
      async resolve(_, { noteId }, { prisma }) {
        if (noteId) {
          const note = await prisma.note.findUnique({
            where: {
              id: noteId,
            },
            include: {
              tag: true
            }
          })
          if (note?.delete === true) return []
          return note ? [note] : []
        }
        const note = await prisma.note.findMany({
          include: {
            tag: true
          }
        })
        return note
      }
    })
  },
})
