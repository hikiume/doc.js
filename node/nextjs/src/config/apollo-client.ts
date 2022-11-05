import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

const baseURL = process.env.NODE_ENV === "development"
  ? "http://localhost:3000/" : "http://133.18.195.221:3000/"

export const cache: InMemoryCache = new InMemoryCache()

/**
 * apollo client の初期化、設定の定義
 */
export const apolloClient = new ApolloClient({
  cache,
  link: createHttpLink({
    uri: `${baseURL}api/graphql`,
    credentials: "include",
  }),
})
