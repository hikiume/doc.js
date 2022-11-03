import { PrismaClient } from "@prisma/client"
import { prisma } from "config/prisma"
import { IncomingMessage, ServerResponse } from "http"

export type Context = {
  res: ServerResponse
  req: IncomingMessage
  prisma: PrismaClient
}

type CreateContext = (
  res: ServerResponse,
  req: IncomingMessage
) => Promise<Context>

export const createContext: CreateContext = async (res, req) => {

  return {
    res,
    req,
    prisma,
  }
}
