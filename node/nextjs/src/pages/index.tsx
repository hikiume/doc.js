import type { NextPage } from "next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiLink from "@mui/material/Link";
import { useRouter } from "next/router";
import { LoginForm } from "components/SignupForm/LoginForm";
import { CreateForm } from "components/SignupForm/CreateForm";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "reactive";
import { useUserListQuery } from "hooks/generated";
import Link from "next/link";

const Home: NextPage = () => {
  const user = useReactiveVar(userVar);
  const { push } = useRouter();
  const { data } = useUserListQuery();

  return (
    <>
      <h1>welcome! my document</h1>
      <div className="mb-4">
        <p className="m-0">
          It's a beta version, so the whole record may be blown XD
        </p>
        <p className="m-0">By the way, all DeepL translations</p>
      </div>
      <h2 className="text-xl mb-2">.Quick Start</h2>
      <div className="flex mb-4">
        <div className="mr-2">
          <ArrowBackIcon />
        </div>
        <div>
          <p className="m-0">Selecting a file opens a text editor.</p>
          <p className="m-0 mb-2">
            You can create a file from the button at the bottom.
          </p>
        </div>
      </div>
      <p className="m-0">
        github{" "}
        <MuiLink
          href="https://github.com/kazuki-lv12/document"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/kazuki-lv12/document
        </MuiLink>
      </p>
      <p className="m-0">
        document{" "}
        <button
          onClick={() => push("/view/cla2r2cgc0000l0avspmr9x7u")}
          className="text-base"
        >
          <MuiLink>.here</MuiLink>
        </button>
      </p>
      {user ? null : (
        <>
          <h1>You are not logged in.🫵</h1>
          <LoginForm />
          <CreateForm />
        </>
      )}
      <h1>member</h1>
      {data?.UserList.map((user, index) => {
        return (
          <div key={index}>
            <li>
              <Link href={`/user/${user?.id}`}>{user?.name}</Link>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Home;
