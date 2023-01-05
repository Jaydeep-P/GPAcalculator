import React from "react";
import styles from "../styles/Subject.module.css";
import { Slider } from "@mui/material";
// import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";

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
  const [credit, setCredit] = useState(0);
  const [grade, setGrade] = useState(6);

  useEffect(() => {
    setCredit(props.data.credit);
    setGrade(props.data.grade);
  }, [props.data]);

  const handleButtonChange = (event, newCredit) => {
    if (newCredit == null) {
      newCredit = 0;
    }
    setCredit(newCredit);
    props.onUpdate({ ...props.data, credit: newCredit });
  };

  const handleSliderChange = (event, newValue) => {
    setGrade(newValue);
    props.onUpdate({ ...props.data, grade: newValue });
  };

  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor:
        credit == 0 || grade == 0
          ? "rgba(103, 58, 183,0.8)"
          : "rgba(105, 199, 44,0.8)",
    },
  });

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.serialContainer}
        style={
          credit == 0 || grade == 0
            ? {}
            : {
                backgroundColor: "#85d154",
              }
        }
      >
        {props.index + 1}
      </div>
      <div
        className={styles.container}
        style={
          credit == 0 || grade == 0
            ? {}
            : {
                outline: "1px solid rgba(192, 217, 174, 1)",
                backgroundColor: "#f4fcf5",
              }
        }
      >
        <div className={styles.sliderConatiner}>
          <Slider
            color={credit == 0 || grade == 0 ? "primary" : "success"}
            aria-label="Restricted values"
            value={grade}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            onChange={handleSliderChange}
            min={1}
            max={7}
          />
        </div>
        <div className={styles.creditContainer}>
          <ToggleButtonGroup
            color={credit == 0 || grade == 0 ? "primary" : "success"}
            value={`${credit}`}
            exclusive
            onChange={handleButtonChange}
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
    </div>
  );
}

export default Subject;
