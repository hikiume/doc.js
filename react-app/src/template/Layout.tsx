import { useUser } from "hooks/useUser"
import { ReactNode } from "react"
import { Login } from "pages/Login"
import { Sidebar } from "./Sidebar"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { user } = useUser()

  if (user) {
    return (
      <div className="flex bg-[#EDF2F7] h-[100vh]">
        <Sidebar />
        <div className="ml-[200px] w-full">{children}</div>
      </div>
    )
  }

  return <Login />
}
