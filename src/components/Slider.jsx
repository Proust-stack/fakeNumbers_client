import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSliderSteps({ error, setError }) {
  return (
    <Box sx={{ minWidth: 100 }}>
      <Slider
        aria-label="Small steps"
        step={0.25}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
        value={error}
        onChange={(e) => setError(e.target.value)}
      />
    </Box>
  );
}
