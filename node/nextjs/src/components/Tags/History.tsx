import { useNoteHistoryQuery } from "hooks/generated";
import { useRouter } from "next/router";

export const HistoryTab = () => {
  const { query } = useRouter();
  const { noteId } = query;
  const { data } = useNoteHistoryQuery({ variables: { noteId: `${noteId}` } });
  return (
    <div>
      {data?.NoteHistory.map((history) => {
        return <div>{history?.id}</div>;
      })}
    </div>
  );
};
