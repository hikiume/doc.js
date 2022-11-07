import { Prisma, PrismaClient } from "@prisma/client"
import { User } from "hooks/generated"
import { IncomingMessage } from "http"
import { verify } from "jsonwebtoken"
import { parseCookies } from "nookies"
import { Token } from "types"

type Props = {
  req: IncomingMessage
  prisma: PrismaClient<Prisma.PrismaClientOptions,
    never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>
}

export const isLogin = async ({ req, prisma }: Props): Promise<User | null> => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY || ""
  const cookie = parseCookies({ req })["KEY"]

  try {
    const jwt = verify(cookie, jwtSecretKey) as Token
    const user = await prisma.user.findUnique({
      where: {
        id: jwt.id
      }
    })
    if (!user) throw new Error("")
    return user
  } catch {
    return null
  }
}
