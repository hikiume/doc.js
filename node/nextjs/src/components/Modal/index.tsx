import { ReactNode } from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import MuiModal from "@mui/material/Modal";

type Props = {
  children: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({ children, open, setOpen }: Props) => {
  const handleClose = () => setOpen(false);

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <div className="absolute top-2/4 left-2/4 modal">
          <div className="p-4 bg-white rounded min-w-[300px]  mx-4">
            <div className="text-right">
              <CloseIcon onClick={handleClose} />
            </div>
            {children}
          </div>
        </div>
      </Box>
    </MuiModal>
  );
};
