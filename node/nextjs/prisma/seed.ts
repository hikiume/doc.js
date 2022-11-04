import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const tagNone = await prisma.tag.create({
    data: {
      name: "none"
    }
  })
  const tagJavaScript = await prisma.tag.create({
    data: {
      name: "JavaScript"
    }
  })
  await prisma.note.create({
    data: {
      title: "hello world!!",
      tag: {
        connect: [{
          id: tagNone.id
        }]
      },
      noteContent: {
        create: {
          body: ""
        }
      }
    }
  })
  await prisma.note.create({
    data: {
      title: "javaScript lesson 1",
      tag: {
        connect: [{
          id: tagJavaScript.id
        }]
      },
      noteContent: {
        create: {
          body: ""
        }
      }
    }
  })
  await prisma.note.create({
    data: {
      title: "javaScript lesson 2",
      tag: {
        connect: [{
          id: tagJavaScript.id
        }]
      },
      noteContent: {
        create: {
          body: ""
        }
      }
    }
  })
}

(async () => {
  try {
    main()
    await prisma.$disconnect()
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }
})()
