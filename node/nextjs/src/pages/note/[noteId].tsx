import type { NextPage } from "next";
import io from "socket.io-client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useNoteQuery } from "hooks/generated";

let socket: any;

const ChatRoom: NextPage = () => {
  const [Input, setInput] = useState("");
  const router = useRouter();
  const { noteId } = router.query;
  const { data, refetch } = useNoteQuery({
    variables: { noteId: `${noteId}` },
  });

  const note = data?.Note ? data.Note[0] : null;

  useEffect(() => {
    if (note) {
      (async () => {
        const { data } = await refetch();
        const note = data?.Note ? data.Note[0] : null;
        setInput(note?.body || "");
      })();
    }
  }, [note]);

  useEffect(() => {
    socket = io();
    if (!noteId) return;

    socket.on("connect", () => {
      console.log("socket connected");
      socket.emit("join", noteId);
    });
    socket.on("message", (data: any) => {
      setInput(data);
    });
  }, [noteId]);

  const sendMessage = (e: string) => {
    setInput(e);
    socket.emit("message", e);
    socket.emit("save");
  };

  return (
    <>
      <h2>Note Id: {noteId}</h2>
      <textarea
        value={Input}
        onChange={(e) => sendMessage(e.currentTarget.value)}
      ></textarea>
      <div
        onClick={() => {
          socket.disconnect();
          router.push("/");
        }}
      >
        back
      </div>
    </>
  );
};

export default ChatRoom;