import { Button, TextField } from "@mui/material";
import { useCreateNoteMutation, useTagQuery } from "hooks/generated";
import { useNoteState } from "hooks/useNoteState";
import {  useState } from "react";
import { Selecter } from "./Selecter";

export const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [tagId, setTagId] = useState<string>("");
  const [muation] = useCreateNoteMutation();
  const { refetch } = useNoteState();
  const { data } = useTagQuery();

  const onClick = async () => {
    if (title === "" || tagId === "") return;
    const { data } = await muation({ variables: { title, tagId } });
    if (data?.CreateNote.error) return;
    setTitle("");
    setTagId("")
    await refetch();
  };

  return (
    <div className="flex flex-col mb-12">
      <h2 className="text-xl"># note</h2>
      <div className="mb-4">
        <TextField
          id="outlined-basic"
          label="title..."
          variant="outlined"
          style={{
            width: "500px",
          }}
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>
      <div className="w-[250px] mb-4">
        {data?.Tag ? (
          <Selecter tagList={data.Tag} tagId={tagId} setTagId={setTagId} />
        ) : null}
      </div>
      <div>
        <Button onClick={onClick} variant="contained">
          document create
        </Button>
      </div>
    </div>
  );
};
