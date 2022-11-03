import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

const baseURL = "http://localhost:3000/"

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
