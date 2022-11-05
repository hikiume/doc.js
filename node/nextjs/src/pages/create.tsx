import { CreateNote } from "components/CreatePage/CreateNote";
import { CreateTag } from "components/CreatePage/CreateTag";
import { DeleteTag } from "components/CreatePage/DeleteTag";
import type { NextPage } from "next";

const Index: NextPage = () => {

  return (
    <>
      <h1 className="text-2xl">Creation</h1>
      <CreateTag />
      <CreateNote />
      <h1 className="text-2xl">Destruction</h1>
      <DeleteTag />
    </>
  );
};

export default Index;
