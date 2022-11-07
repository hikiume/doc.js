import { Button, TextField } from "@mui/material";
import {
  useCommentQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
} from "hooks/generated";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useRouter } from "next/router";
import { alert } from "operations/alert";
import DeleteIcon from "@mui/icons-material/Delete";

export const CommentTab = () => {
  const [message, setMessage] = useState("");
  const { data, refetch } = useCommentQuery();
  const [mutation] = useCreateCommentMutation();
  const [mutation1] = useEditCommentMutation();
  const [mutation2] = useDeleteCommentMutation();
  const { query } = useRouter();
  const { noteId } = query;

  const onClick = async () => {
    const { data } = await mutation({
      variables: { body: message, noteId: `${noteId}` },
    });
    alert.view(data?.CreateComment);
    if (data?.CreateComment.error) return;
    await refetch();
    setMessage("");
  };

  const onClick1 = async (commentId: string | undefined) => {
    if (!commentId) return;
    const { data } = await mutation1({
      variables: { body: message, commentId },
    });
    alert.view(data?.EditComment);
    if (data?.EditComment.error) return;
    await refetch();
    setMessage("");
  };

  const onClick2 = async (commentId: string | undefined) => {
    if (!commentId) return;
    const { data } = await mutation2({
      variables: { commentId },
    });
    alert.view(data?.DeleteComment);
    if (data?.DeleteComment.error) return;
    await refetch();
    setMessage("");
  };

  return (
    <div className="flex flex-col h-full">
      {data?.Comment.map((comment) => {
        return (
          <div>
            <div className="flex justify-between">
              <p className="m-0">{comment?.body}</p>
              <div>
                <button
                  className="hover:text-red-500"
                  onClick={() => onClick1(comment?.id)}
                >
                  <EditIcon />
                </button>
                <button
                  className="hover:text-red-500"
                  onClick={() => onClick2(comment?.id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
            <p className="m-0 text-xs">user id:{comment?.userId}</p>
            <p className="m-0 text-xs mb-1">time:{comment?.createdAt}</p>
          </div>
        );
      })}
      <div className="mb-4">
        <TextField
          id="outlined-basic"
          label="message"
          variant="outlined"
          className="w-full"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
      </div>
      <div className="text-center">
        <Button variant="contained" onClick={onClick}>
          upload
        </Button>
      </div>
    </div>
  );
};
