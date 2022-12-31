import React from "react";
import styles from "../styles/Subject.module.css";
import { Slider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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

function valueLabelFormat(value) {
  //   return marks.findIndex((mark) => mark.value === value) + 1;
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

  return (
    <div className={styles.container}>
      <div className={styles.sliderConatiner}>
        <Slider
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
          color="primary"
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
  );
}

export default Subject;
