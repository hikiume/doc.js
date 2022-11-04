import type { NextPage } from "next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiLink from "@mui/material/Link";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <>
      <h1 className="text-2xl">welcome! my document</h1>
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
          <p className="m-0">
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
          onClick={() => push("/view/cla2r2ckc0004l0avh1dqbnsc")}
          className="text-base"
        >
          <MuiLink>.here</MuiLink>
        </button>
      </p>
    </>
  );
};

export default Home;
