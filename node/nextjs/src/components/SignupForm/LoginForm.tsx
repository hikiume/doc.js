import { Button, TextField } from "@mui/material";
import { InputPassword } from "components/atoms/InputPassword";
import { useUserLoginMutation } from "hooks/generated";
import { useUserState } from "hooks/useUserState";
import { alert } from "operations/alert";
import { useState } from "react";

export const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mutation] = useUserLoginMutation();
  const disabled = [name, password].includes("");
  const { refetch } = useUserState();

  const onClick = async () => {
    const { data } = await mutation({
      variables: {
        name,
        password,
      },
    });
    alert.view(data?.UserLogin);
    if (data?.UserLogin.error) return;
    await refetch();
    setName("");
    setPassword("");
  };

  return (
    <>
      <h1 className="text-2xl">Login?</h1>
      <div className="flex flex-col">
        <div className="mb-2">
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className="flex items-center">
          <InputPassword
            label="password"
            state={password}
            setState={setPassword}
          />
          <div className="ml-4">
            <Button variant="contained" onClick={onClick} disabled={disabled}>
              Login!!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
