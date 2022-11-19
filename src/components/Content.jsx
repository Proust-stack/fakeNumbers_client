import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { observer } from "mobx-react-lite";

import { Context } from "../index";
import SpinnerComponent from "./Spinner";
import BasicTable from "./Table";

const Content = observer(() => {
  const users = useContext(Context);
  const [items, setItems] = useState(localStorage.getItem("users"));

  useEffect(() => {
    setItems(users.getData());
  }, [users]);

  if (!items) {
    return <SpinnerComponent />;
  }
  //const errCoef = req.query.errCoef || "0.0";
  return (
    <Box sx={{ width: "100%" }}>
      <BasicTable items={items} />
      {/* <Stack spacing={2}>
        {items.map((item) => {
          return <Item key={item.name}>{item.name}</Item>;
        })}
      </Stack> */}
    </Box>
  );
});
export default Content;
