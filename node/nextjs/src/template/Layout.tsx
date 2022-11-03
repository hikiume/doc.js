import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  useEffect(() => {

  }, [])

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
