import { Button } from "@mui/material";
import { useDeleteTagMutation, useTagQuery } from "hooks/generated";
import { alert } from "operations/alert";
import { useState } from "react";
import { Selecter } from "./Selecter";

export const DeleteTag = () => {
  const [tagId, setTagId] = useState<string>("");
  const { data } = useTagQuery();
  const [mutation] = useDeleteTagMutation();

  const onClick = async () => {
    const { data } = await mutation({ variables: { tagId } });
    alert.view(data?.DeleteTag);
    if (data?.DeleteTag.error) return;
    setTagId("");
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl"># tags</h2>
      <div className="w-[250px] mb-4">
        {data?.Tag ? (
          <Selecter tagList={data.Tag} tagId={tagId} setTagId={setTagId} />
        ) : null}
      </div>
      <div>
        <Button onClick={onClick} variant="contained" color="error">
          tag Destroy
        </Button>
      </div>
    </div>
  );
};
