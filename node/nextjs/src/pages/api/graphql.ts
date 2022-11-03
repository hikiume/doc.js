import { ApolloServer } from "apollo-server-micro"
import Cors from "micro-cors"
import { IncomingMessage as Req, ServerResponse as Res } from "http"
import { createContext } from "server/graphql/context"
import { schema } from "server/graphql/schema"
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache"

const corsOptions = {
  origin: "https://studio.apollographql.com",
  credentials: true,
}

const cors = Cors(corsOptions)

const apolloServer = new ApolloServer({
  schema,
  context: ({ res, req }: { res: Res; req: Req }) => {
    return createContext(res, req)
  },
  cache: new InMemoryLRUCache(),
})

const startServer = apolloServer.start()

const handler = async (req: Req, res: Res) => {
  if (req.method === "OPTIONS") {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default cors((req, res) => handler(req, res))