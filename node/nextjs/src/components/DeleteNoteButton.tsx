import { Button } from "@mui/material";
import { Note, useDeleteNoteMutation } from "hooks/generated";
import { useNoteState } from "hooks/useNoteState";
import { useRouter } from "next/router";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";

type Props = {
  id: Note["id"];
};

export const DeleteNoteButton = ({ id }: Props) => {
  const [mutation] = useDeleteNoteMutation();
  const { push } = useRouter();
  const { refetch } = useNoteState();

  const onClick = async () => {
    const { data } = await mutation({ variables: { noteId: id } });
    if (data?.DeleteNote.error) return;
    await refetch();
    push("/");
  };

  return (
    <div>
      <Button onClick={onClick}>
        <FolderDeleteIcon style={{ marginRight: "6px" }} />
        delete
      </Button>
    </div>
  );
};
