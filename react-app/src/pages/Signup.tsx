import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <>
      <h1 className="text-xl text-red-500">新規登録ページ</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};