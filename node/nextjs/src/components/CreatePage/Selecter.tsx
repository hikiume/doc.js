import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Dispatch, SetStateAction } from "react";
import { Tag } from "hooks/generated";

type Props = {
  tagList: Tag[];
  tagId: string;
  setTagId: Dispatch<SetStateAction<string>>;
};

export const Selecter = ({ tagList, tagId, setTagId }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    setTagId(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Tag</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={tagId}
        label="Age"
        onChange={handleChange}
      >
        {tagList.map((tag, index) => {
          return (
            <MenuItem value={tag.id} key={index}>
              {tag.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
