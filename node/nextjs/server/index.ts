import { Server, createServer } from "http";
import next, { NextApiHandler, NextApiRequest } from "next";
import { Server as socketioServer, Socket } from "socket.io";
import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
import { isLogin } from "graphql/common/auth";

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma
}

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle: NextApiHandler = app.getRequestHandler();

app.prepare().then(async () => {
  const expressApp: Express = express();
  const server: Server = createServer(expressApp);
  const io: socketioServer = new socketioServer();

  io.attach(server);
  expressApp.get("/api/socket", async (req: Request, res: Response) => {
    res.send("my document web socket dir!!");
  });

  io.on("connection", async (socket: any) => {
    const noteId = socket.handshake.headers.referer?.replace(`${process.env.NEXT_PUBLIC_URL}note/`, "")
    let body = ""

    socket.on("join", (e: string) => {
      socket.join(noteId);
    });
    socket.on("message", (e: string) => {
      console.log(e)
      socket.broadcast.to(noteId).emit("message", e)
    });
    socket.on("save", async (e: string) => {
      body = e
      await prisma.noteContent.update({
        where: {
          noteId: noteId
        },
        data: {
          body: e
        }
      })
    })
    socket.on("disconnect", async () => {
      socket.leave(noteId)
      // await prisma.noteHistory.create({
      //   data: {
      //     noteId,
      //     userId,
      //     body
      //   }
      // })
    })
  });

  expressApp.all("*", (req: NextApiRequest, res: any) => handle(req, res));
  server.listen(port);
});