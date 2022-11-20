import React, { useContext, useEffect, useState, useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { observer } from "mobx-react-lite";

import { getData } from "../http/usersApi";
import Tools from "./Tools";
import { Context } from "../index";

const BasicTable = observer(() => {
  //const users = useContext(Context);
  const [fetching, setFetching] = useState(true);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const [error, setError] = React.useState(0);
  const [lan, setLan] = React.useState("en_GB");
  const [seed, setSeed] = React.useState(0);

  const handleInitial = async () => {
    console.log("handleInitial", "page:", page);
    const data = await getData(page, lan, seed);
    const { users } = data;
    setItems([...items, ...users]);
    setPage((prev) => prev + 1);
    setFetching(false);
  };

  useEffect(() => {
    if (fetching) {
      handleInitial();
    }
  }, [fetching]);

  useEffect(() => {
    setPage(1);
    setItems([]);
    setFetching(true);
  }, [lan, seed, error]);

  const ScrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      60
    ) {
      setFetching(true);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", ScrollHandler);
    return function () {
      document.removeEventListener("scroll", ScrollHandler);
    };
  }, []);

  return (
    <TableContainer component={Paper}>
      <Tools
        error={error}
        setError={setError}
        lan={lan}
        setLan={setLan}
        seed={seed}
        setSeed={setSeed}
      />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="left">uuid</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{row.userId}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default BasicTable;
