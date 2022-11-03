import { extendType, stringArg } from "nexus"

export const Note = extendType({
  type: "Query",
  definition(t) {
    t.list.field("Note", {
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
          })
          if (note?.delete === true) return []
          return note ? [note] : []
        }
        return await prisma.note.findMany({
          where: {
            delete: false
          }
        })
      }
    })
  },
})