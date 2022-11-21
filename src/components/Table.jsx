import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { observer } from "mobx-react-lite";
import { CSVLink } from "react-csv";

import { getData } from "../http/usersApi";
import Tools from "./Tools";

const BasicTable = observer(() => {
  const [fetching, setFetching] = useState(true);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState({});

  const [error, setError] = React.useState(0);
  const [lan, setLan] = React.useState("en_GB");
  const [seed, setSeed] = React.useState(0);

  const handleInitial = async () => {
    const data = await getData(page, lan, seed, error);
    const { users, next } = data;
    setItems([...items, ...users]);
    setNextPage(next);
    setPage((prev) => prev + 1);
    setFetching(false);
  };

  useEffect(() => {
    if (fetching && nextPage) {
      handleInitial();
    }
  }, [fetching]);

  useEffect(() => {
    setPage(1);
    setItems([]);
    setNextPage({});
    setFetching(true);
  }, [lan, seed, error]);

  const ScrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      40
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
    <TableContainer component={Paper} style={{ marginTop: "10px" }}>
      <CSVLink
        data={items}
        separator={";"}
        style={{ textDecoration: "none", marginTop: "200px" }}
      >
        Download CSV
      </CSVLink>
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
              key={row.userId}
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
