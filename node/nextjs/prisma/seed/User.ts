import { prisma } from "./instance"

export const UserSeed = async () => {
  const name = "ikki"
  const password = "hogehoge"

  await prisma.user.create({
    data: {
      name,
      password,
    }
  })

  const user = await prisma.user.findUnique({
    where: {
      name,
    }
  })
  if (!user) throw new Error("User.ts <- not create user!")
}