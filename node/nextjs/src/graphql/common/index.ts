// ミューテーション(Mutation)またはAPIの戻り値
// 必ずこの値で返すことによってフロントでのエラーハンドリングを統一する

/**
 * grapqhQL用のリターン関数
 */
export const rtn = {
  f: (message: string, code?: unknown) => {
    return {
      body: message,
      code: code ? `${code}` : "",
      error: true,
    }
  },
  t: (message: string, code?: unknown) => {
    return {
      body: message,
      code: code ? `${code}` : "",
      error: false,
    }
  },
}
