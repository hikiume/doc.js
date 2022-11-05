import { makeSchema } from "nexus"
import { join } from "path"
import * as types from "./types"

/**
 * nexus を通して graphql のスキーマを定義
 */
export const schema = makeSchema({
  types,
  // graphql schemaを生成
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "src", "graphql", "schema.graphql"),
  },
  // 共通データのファイルパスの設定
  contextType: {
    export: "Context",
    module: join(
      process.cwd(),
      "src",
      "graphql",
      "context.ts"
    ),
  },
})