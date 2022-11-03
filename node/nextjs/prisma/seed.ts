import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const tag = await prisma.tag.create({
    data: {
      tag: "default"
    }
  })
  await prisma.note.create({
    data: {
      title: "hello world first!!",
      body: "hello world my document level 1",
      tagId: tag.id
    }
  })
  await prisma.note.create({
    data: {
      title: "hello world second!!",
      body: "hello world my document level 2",
      tagId: tag.id
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
