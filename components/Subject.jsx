import React from "react";
import styles from "../styles/Subject.module.css";
import { Slider } from "@mui/material";
// import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    success: {
      main: "rgba(105, 199, 44)",
      secondary: "#000",
    },
  },
});

const marks = [
  { value: 1, label: "F" },
  { value: 2, label: "C" },
  { value: 3, label: "B" },
  { value: 4, label: "B+" },
  { value: 5, label: "A" },
  { value: 6, label: "A+" },
  { value: 7, label: "O" },
];

function valuetext(value) {
  return `${value}`;
}

function Subject(props) {
  const [alignment, setAlignment] = React.useState(3);

  const handleChange = (event, newAlignment) => {
    console.log(newAlignment);
    if (newAlignment == null) {
      newAlignment = 0;
    }
    setAlignment(newAlignment);
    props.onUpdate({ ...props.data, credit: newAlignment });
  };

  const handleSliderChange = (event, newValue) => {
    props.onUpdate({ ...props.data, grade: newValue });
  };

  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor:
        props.data.credit == 0 || props.data.grade == 0
          ? "rgba(25, 118, 210,0.8)"
          : "rgb(105, 199, 44,0.8)",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        className={styles.container}
        style={
          props.data.credit == 0 || props.data.grade == 0
            ? {}
            : {
                outline: "1px solid rgba(192, 217, 174, 1)",
                backgroundColor: "#f4fcf5",
              }
        }
      >
        <div className={styles.sliderConatiner}>
          <Slider
            color={
              props.data.credit == 0 || props.data.grade == 0
                ? "primary"
                : "success"
            }
            aria-label="Restricted values"
            defaultValue={0}
            //   valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={1}
            //   valueLabelDisplay="auto"
            marks={marks}
            onChange={handleSliderChange}
            min={1}
            max={7}
          />
        </div>
        <div className={styles.creditContainer}>
          <ToggleButtonGroup
            color={
              props.data.credit == 0 || props.data.grade == 0
                ? "primary"
                : "success"
            }
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
              width: "100%",
            }}
          >
            <ToggleButton
              value="1"
              sx={{
                width: "100%",
              }}
            >
              1
            </ToggleButton>
            <ToggleButton
              value="2"
              sx={{
                width: "100%",
              }}
            >
              2
            </ToggleButton>
            <ToggleButton
              value="3"
              sx={{
                width: "100%",
              }}
            >
              3
            </ToggleButton>
            <ToggleButton
              value="4"
              sx={{
                width: "100%",
              }}
            >
              4
            </ToggleButton>
            <ToggleButton
              value="5"
              sx={{
                width: "100%",
              }}
            >
              5
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Subject;
