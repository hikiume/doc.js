import { useReactiveVar } from "@apollo/client";
import { alertVar } from "reactive";
import MuiAlert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import AlertTitle from "@mui/material/AlertTitle";

export const Alert = () => {
  const alert = useReactiveVar(alertVar);
  const onClick = () => alertVar(null);

  if (!alert) return <></>;

  return (
    <div className={`fixed top-4 right-4 ml-4 z-20 ${alert ? "" : "hidden"}`}>
      <MuiAlert
        variant="outlined"
        severity={alert.severity}
        style={{
          borderRadius: "5px",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="flex min-w-[200px] justify-between">
          <div>
            <AlertTitle className="flex justify-between">
              {alert.severity}
            </AlertTitle>
            <p className="my-2">{alert.text}</p>
          </div>
          <div>
            <CloseIcon onClick={onClick} />
          </div>
        </div>
      </MuiAlert>
    </div>
  );
};
