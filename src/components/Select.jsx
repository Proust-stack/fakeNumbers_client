import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ lan, setLan }) {
  const handleChange = (event) => {
    setLan(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 150 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-select-small">Lan</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={lan}
          onChange={handleChange}
          variant="standard"
          label="Language"
        >
          <MenuItem value="de">German</MenuItem>
          <MenuItem value="en_GB">English</MenuItem>
          <MenuItem value="zh_CN">Chineese</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
