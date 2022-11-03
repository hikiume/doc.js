import { Button, TextField } from "@mui/material";
import { useCreateNoteMutation } from "hooks/generated";
import { useNoteState } from "hooks/useNoteState";
import { FormEvent, useState } from "react";

export const CreateNoteInput = () => {
  const [title, setTitle] = useState("");
  const [muation] = useCreateNoteMutation();
  const { refetch } = useNoteState();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return;
    const { data } = await muation({ variables: { title } });
    if (data?.CreateNote.error) return;
    setTitle("");
    await refetch();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <Button type="submit">作成</Button>
      </form>
    </div>
  );
};
