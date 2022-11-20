import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderSteps({ error, setError }) {
  return (
    <Box sx={{ minWidth: 100 }}>
      <Slider
        aria-label="Small steps"
        getAriaValueText={valuetext}
        step={0.5}
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
