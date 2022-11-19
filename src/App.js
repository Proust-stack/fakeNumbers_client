import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";

import MainPage from "./pages/MainPage";
import { getInitialData } from "./http/usersApi";
import { Context } from "./index";
import SpinnerComponent from "./components/Spinner";

const App = observer(() => {
  const users = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInitialData()
      .then((data) => {
        users.setData(data);
      })
      .finally(() => setLoading(false));
  }, [users]);

  if (loading) {
    return <SpinnerComponent />;
  }
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <MainPage />
      </Container>
    </BrowserRouter>
  );
});

export default App;
