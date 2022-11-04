import { Server, createServer } from "http";
import next, { NextApiHandler, NextApiRequest } from "next";
import { Server as socketioServer, Socket } from "socket.io";
import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client"

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

  let request: Request

  io.attach(server);
  expressApp.get("/api/socket", async (req: Request, res: Response) => {
    request = req
    res.send("hello world!");
  });

  io.on("connection", async (socket: any) => {
    const noteId = socket.handshake.headers.referer?.replace("http://localhost:3000/note/", "")
    try {
      const note = await prisma.note.findUnique({
        where: {
          id: noteId
        }
      })
      socket.note = note;
    } catch (e) {
      console.log(e)
    }

    socket.on("join", () => {
      console.log("join!!")
      socket.join(socket.note.id);
    });
    socket.on("message", (e: any) => {
      socket.note.body = e
      socket.broadcast.to(socket.note.id).emit("message", e)
    });
    socket.on("save", async () => {
      await prisma.noteContent.update({
        where: {
          noteId: socket.note.id
        },
        data: {
          body: socket.note.body
        }
      })
    })
  });

  expressApp.all("*", (req: NextApiRequest, res: any) => handle(req, res));
  server.listen(port);
});