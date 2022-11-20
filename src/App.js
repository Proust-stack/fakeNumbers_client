import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";

import MainPage from "./pages/MainPage";
import NavBar from "./components/Navbar";

const App = observer(() => {
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
