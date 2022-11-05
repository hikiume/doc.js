"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const next_1 = __importDefault(require("next"));
const socket_io_1 = require("socket.io");
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = global.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
}
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = (0, next_1.default)({ dev });
const handle = app.getRequestHandler();
app.prepare().then(async () => {
    const expressApp = (0, express_1.default)();
    const server = (0, http_1.createServer)(expressApp);
    const io = new socket_io_1.Server();
    let request;
    io.attach(server);
    expressApp.get("/api/socket", async (req, res) => {
        request = req;
        res.send("my document web socket dir!!");
    });
    io.on("connection", async (socket) => {
        var _a;
        const noteId = (_a = socket.handshake.headers.referer) === null || _a === void 0 ? void 0 : _a.replace(`${process.env.NEXT_PUBLIC_URL}note/`, "");
        let body = "";
        try {
            const note = await prisma.noteContent.findUnique({
                where: {
                    noteId,
                }
            });
            body = (note === null || note === void 0 ? void 0 : note.body) || "";
        }
        catch (e) {
            console.log(e);
        }
        console.log(noteId);
        socket.on("join", () => {
            socket.join(noteId);
        });
        socket.on("message", (e) => {
            body = e;
            socket.broadcast.to(noteId).emit("message", e);
        });
        socket.on("save", async () => {
            await prisma.noteContent.update({
                where: {
                    noteId: noteId
                },
                data: {
                    body: body
                }
            });
        });
    });
    expressApp.all("*", (req, res) => handle(req, res));
    server.listen(port);
});
