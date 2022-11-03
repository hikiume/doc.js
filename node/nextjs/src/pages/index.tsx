import { useNoteQuery } from "hooks/generated";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const { data } = useNoteQuery();

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
    </>
  );
};

export default Home;
