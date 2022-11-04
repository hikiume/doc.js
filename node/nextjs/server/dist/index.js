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
        res.send("hello world!");
    });
    io.on("connection", async (socket) => {
        var _a;
        const noteId = (_a = socket.handshake.headers.referer) === null || _a === void 0 ? void 0 : _a.replace("http://localhost:3000/note/", "");
        try {
            const note = await prisma.note.findUnique({
                where: {
                    id: noteId
                }
            });
            socket.note = note;
        }
        catch (e) {
            console.log(e);
        }
        socket.on("join", () => {
            console.log("join!!");
            socket.join(socket.note.id);
        });
        socket.on("message", (e) => {
            socket.note.body = e;
            socket.broadcast.to(socket.note.id).emit("message", e);
        });
        socket.on("save", async () => {
            await prisma.noteContent.update({
                where: {
                    noteId: socket.note.id
                },
                data: {
                    body: socket.note.body
                }
            });
        });
    });
    expressApp.all("*", (req, res) => handle(req, res));
    server.listen(port);
});
