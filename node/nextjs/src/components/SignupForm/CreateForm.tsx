import { Button, TextField } from "@mui/material";
import { InputPassword } from "components/atoms/InputPassword";
import { useUserCreateMutation } from "hooks/generated";
import { useUserState } from "hooks/useUserState";
import { alert } from "operations/alert";
import { useState } from "react";

export const CreateForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [mutation] = useUserCreateMutation();
  const disabled = [name, password, password2].includes("");
  const { refetch } = useUserState();

  const onClick = async () => {
    const { data } = await mutation({
      variables: {
        name,
        password,
        password2,
      },
    });
    alert.view(data?.UserCreate);
    if (data?.UserCreate.error) return;
    await refetch();
    setName("");
    setPassword("");
    setPassword2("");
  };

  return (
    <>
      <h1 className="text-2xl">Create?</h1>
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
        <div className="mb-2">
          <InputPassword
            label="password"
            state={password}
            setState={setPassword}
          />
        </div>
        <div className="flex items-center">
          <InputPassword
            label="password"
            state={password2}
            setState={setPassword2}
          />
          <div className="ml-4">
            <Button variant="contained" onClick={onClick} disabled={disabled}>
              Create!!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
