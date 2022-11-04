import type { NextPage } from "next";
import { useRouter } from "next/router";
import { DeleteNoteButton } from "components/DeleteNoteButton";
import { useNoteState } from "hooks/useNoteState";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import EditIcon from "@mui/icons-material/Edit";
import { Modal } from "components/Modal";
import { useState } from "react";

const Editor = dynamic<{}>(
  () => import("components/Editor").then((mod) => mod.Editor),
  { ssr: false }
);

const Index: NextPage = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { noteId } = router.query;
  const { data } = useNoteState(`${noteId}`);
  const note = data?.Note ? data.Note[0] : null;

  if (!note) {
    return (
      <div>
        <p>Hmm...this page doesn’t exist. Try searching for something else.</p>
        <p className="text-xs text-gray-500">Try searching for another.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="m-0 mb-2">Note Id: {noteId}</p>
          <p className="m-0">title: {note.title}</p>
        </div>
        <div className="flex">
          <div className="mr-4">
            <Link href={`/view/${noteId}`}>
              <Button>
                <LaunchIcon style={{ marginRight: "6px" }} />
                HTML
              </Button>
            </Link>
          </div>
          <div className="mr-4">
            <DeleteNoteButton id={note?.id!} />
          </div>
          <div>
            <Button variant="contained" onClick={() => setOpen(true)}>
              <EditIcon style={{ marginRight: "6px" }} />
              Edit
            </Button>
          </div>
        </div>
      </div>
      <Editor />
      <Modal open={open} setOpen={setOpen}>
        <div>
          <p>・タイトル変更</p>
          <p>・権限変更</p>
          <p>・タグ変更</p>
        </div>
      </Modal>
    </>
  );
};

export default Index;
