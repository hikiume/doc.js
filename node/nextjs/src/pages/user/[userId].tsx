import { useUserQuery } from "hooks/generated";
import { useRouter } from "next/router";

const Index = () => {
  const { query } = useRouter();
  const { data } = useUserQuery({ variables: { userId: `${query.userId}` } });
  const user = data?.User;

  return (
    <div>
      <p>id: {user?.id}</p>
      <p>createAt {user?.createdAt}</p>
      <p>name: {user?.name}</p>
    </div>
  );
};
export default Index;
