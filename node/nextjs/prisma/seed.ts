import { prisma } from "./seed/instance"
import { UserSeed } from "./seed/User"

const main = async () => {
  UserSeed()
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
