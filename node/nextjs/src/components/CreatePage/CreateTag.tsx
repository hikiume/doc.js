import { Button, TextField } from "@mui/material";
import { useCreateTagMutation } from "hooks/generated";
import { alert } from "operations/alert";
import { useState } from "react";

export const CreateTag = () => {
  const [tagName, setTagName] = useState<string>("");
  const [mutation] = useCreateTagMutation();

  const onClick = async () => {
    const { data } = await mutation({ variables: { tagName } });
    alert.view(data?.CreateTag);
    if (data?.CreateTag.error) return;
    setTagName("");
  };

  return (
    <div className="flex flex-col mb-4">
      <h2 className="text-xl"># tags</h2>
      <div className="mb-4">
        <TextField
          id="outlined-basic"
          label="tag name..."
          variant="outlined"
          style={{
            width: "250px",
          }}
          value={tagName}
          onChange={(e) => setTagName(e.currentTarget.value)}
        />
      </div>
      <div>
        <Button onClick={onClick} variant="contained">
          tag create
        </Button>
      </div>
    </div>
  );
};
