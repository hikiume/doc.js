import { useEffect } from "react"
import { userVar } from "reactive"
import { useUserStateQuery } from "./generated"

export const useUserState = () => {
  const { data, refetch } = useUserStateQuery()
  console.log(data?.UserState)
  useEffect(() => {
    userVar(data?.UserState)
  }, [data])

  return {
    refetch
  }
}