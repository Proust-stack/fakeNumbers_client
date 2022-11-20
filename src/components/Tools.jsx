import React from "react";
import BasicSelect from "./Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { faker } from "@faker-js/faker";
import Box from "@mui/material/Box";

import DiscreteSliderSteps from "./Slider";

export default function Tools(props) {
  const { error, lan, setError, setLan, seed, setSeed } = props;

  const getRndNumber = () => {
    const rndLetter = faker.random.numeric();
    setSeed(rndLetter);
  };
  const getFakeLetter = () => {
    return faker.random.alpha();
  };
  return (
    // <Box sx={{ marginBottom: 2, marginTop: 2 }}>
    //   <BasicSelect />
    //   <Slider />
    // </Box>
    <Stack
      spacing={4}
      direction="row"
      sx={{ mb: 1 }}
      alignItems="center"
      justifyContent="flex-end"
    >
      <BasicSelect lan={lan} setLan={setLan} />
      <Box>
        <DiscreteSliderSteps
          aria-label="Error"
          error={error}
          setError={setError}
          defaultValue={0}
        />
        <TextField
          label="Error"
          id="outlined-size-small"
          size="small"
          type="number"
          value={error}
          onChange={(e) => setError(e.target.value)}
          sx={{ maxWidth: 100 }}
        />
      </Box>
      <Box>
        <TextField
          label="Seed"
          id="outlined-size-small"
          size="small"
          type="number"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          sx={{ maxWidth: 100 }}
        />
        <Button color="primary" onClick={getRndNumber}>
          Rundom
        </Button>
      </Box>
    </Stack>
  );
}
