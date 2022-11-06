import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { DirView } from "components/DirTree";
import Link from "next/link";
import { ReactNode } from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { Alert } from "./Alert";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "reactive";
import { useUserState } from "hooks/useUserState";

type Props = {
  children: ReactNode;
};

const CreateButton = styled(Button)({
  "&:hover": {
    borderColor: "white",
    boxShadow: "0 3px 10px rgb(93 93 93 / 15%)",
  },
});

export const Layout = ({ children }: Props) => {
  useUserState();
  const user = useReactiveVar(userVar);

  return (
    <>
      <div className="flex pc">
        <div className="flex flex-col w-[20%] min-w-[180px] max-w-[240px] h-[100vh] boder-r">
          <div className="flex items-center justify-center">
            <AccountBoxIcon
              style={{
                marginRight: "12px",
              }}
            />
            <p className="pt-1">
              {user ? (
                <Link href={`/user/${user.id}`}>{user.name}</Link>
              ) : (
                <Link href={"/"}>not login</Link>
              )}
            </p>
          </div>
          <DirView />
          {user ? (
            <div className="mt-auto text-center py-4">
              <Link href="/create">
                <CreateButton
                  style={{
                    backgroundColor: "rgb(250 250 250 / 1)",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    borderRadius: "15px",
                  }}
                >
                  <CreateNewFolderIcon
                    style={{
                      marginRight: "12px",
                    }}
                  />
                  create
                </CreateButton>
              </Link>
            </div>
          ) : null}
          <p className="text-center m-0 text-gray-500 text-xs mb-2">
            <a
              href="https://github.com/kazuki-lv12/my-document/releases/tag/v0.0.1"
              target="_blank"
              rel="noreferrer"
            >
              version 0.0.1
            </a>
          </p>
        </div>
        {user === undefined ? (
          <>now loading...</>
        ) : (
          <div className="w-full m-4">{children}</div>
        )}
        <Alert />
      </div>
      <p className="phone text-center my-16">
        表示できねぇむりぽっ！
        <br />
        （レスポンシブ対応させるのめんどくさかった）
      </p>
    </>
  );
};
