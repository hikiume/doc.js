import { CreateNoteInput } from "components/CreateNoteInput";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <>
      <p>title ノート作成</p>
      <CreateNoteInput />
    </>
  );
};

export default Index;
