import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

export const cache: InMemoryCache = new InMemoryCache()

/**
 * apollo client の初期化、設定の定義
 */
export const apolloClient = new ApolloClient({
  cache,
  link: createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_URL}api/graphql`,
    credentials: "include",
  }),
})
