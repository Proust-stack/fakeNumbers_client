import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";

import MainPage from "./pages/MainPage";
import { getData } from "./http/usersApi";
import { Context } from "./index";
import SpinnerComponent from "./components/Spinner";
import NavBar from "./components/Navbar";
import Tools from "./components/Tools";

const App = observer(() => {
  const users = useContext(Context);
  //const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getData()
  //     .then((data) => {
  //       users.setData(data);
  //     })
  //     .finally(() => setLoading(false));
  // }, [users]);

  // if (loading) {
  //   return <SpinnerComponent />;
  // }
  return (
    <BrowserRouter>
      <NavBar />
      <Container maxWidth="xl">
        <MainPage />
      </Container>
    </BrowserRouter>
  );
});

export default App;
