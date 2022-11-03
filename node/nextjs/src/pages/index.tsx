import { CreateNoteInput } from "components/CreateNoteInput";
import { useNoteState } from "hooks/useNoteState";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const { data } = useNoteState();

  return (
    <>
      <h1>ノートリスト</h1>
      {data?.Note?.map((note, index) => {
        return (
          <div key={index}>
            <Link href={`/note/${note?.id}`}>{note?.title}</Link>
          </div>
        );
      })}
      <p>title ノート作成</p>
      <CreateNoteInput />
    </>
  );
};

export default Home;
