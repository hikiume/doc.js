import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useNoteState } from "hooks/useNoteState";
import { useNoteContentQuery } from "hooks/generated";

const Index: NextPage = () => {
  const { query } = useRouter();
  const { noteId } = query;
  const { data } = useNoteContentQuery({
    variables: { noteId: `${noteId}` },
  });

  if (!data?.NoteContent) {
    return (
      <div>
        <p>Hmm...this page doesn’t exist. Try searching for something else.</p>
        <p className="text-xs text-gray-500">Try searching for another.</p>
      </div>
    );
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: data.NoteContent.body,
      }}
    />
  );
};

export default Index;
