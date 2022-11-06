import { useEffect, useState } from "react";
import { useNoteState } from "hooks/useNoteState";
import { useRouter } from "next/router";
import io from "socket.io-client";
import { toolbarOptions } from "./tools";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
// import 'react-quill/dist/quill.core.css'
// import 'react-quill/dist/quill.bubble.css'
import ReactQuill from "react-quill";
import { useNoteContentQuery } from "hooks/generated";

let socket: any;

export const Editor = () => {
  const [Input, setInput] = useState("");
  const { query } = useRouter();
  const { noteId } = query;
  const { data } = useNoteState(`${noteId}`);
  const { refetch } = useNoteContentQuery({
    variables: { noteId: `${noteId}` },
  });

  const note = data?.Note ? data.Note[0] : null;

  useEffect(() => {
    if (note) {
      (async () => {
        const { data } = await refetch();
        const note = data?.NoteContent ? data.NoteContent.body : null;
        setInput(note || "");
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
      console.log(data)
      setInput(data);
    });
  }, [noteId]);

  const sendMessage = (e: string) => {
    console.log(e)
    setInput(e);
    socket.emit("message", e);
    socket.emit("save", e);
  };

  hljs.configure({
    languages: ["javascript", "rust"],
  });

  return (
    <code>
      <pre>
        <ReactQuill
          theme="snow"
          value={Input}
          onChange={(e) => sendMessage(e)}
          modules={toolbarOptions}
        />
      </pre>
    </code>
  );
};
