import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { DirView } from "components/DirTree";
import Link from "next/link";
import { ReactNode, useState } from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

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
  return (
    <>
      <div className="flex pc">
        <div className="flex flex-col w-[20%] min-w-[180px] max-w-[240px] h-[100vh] boder-r">
          <div className="text-center pt-4 pb-2">
            <Link href="/">my document!!</Link>
          </div>
          <DirView />
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
        </div>
        <div className="w-full m-4">{children}</div>
      </div>
      <p className="phone text-center my-16">
        表示できねぇむりぽっ！
        <br />
        （レスポンシブ対応させるのめんどくさかった）
      </p>
    </>
  );
};
