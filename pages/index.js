import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import Subject from "../components/Subject";
import { useState, useEffect, use, useDebugValue } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

let defaultArray = [
  { grade: 0, credit: 0 },
  { grade: 0, credit: 0 },
  { grade: 0, credit: 0 },
  { grade: 0, credit: 0 },
  { grade: 0, credit: 0 },
  { grade: 0, credit: 0 },
  { grade: 0, credit: 0 },
  { grade: 0, credit: 0 },
  { grade: 0, credit: 0 },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
    success: {
      main: "rgba(105, 199, 44)",
    },
  },
});

export default function Home() {
  const [infoArray, setInfoArray] = useState(defaultArray);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items && items.length > 4 && items != defaultArray) {
      setInfoArray(items);
    }
  }, []);

  useEffect(() => {
    if (infoArray && infoArray.length > 0 && infoArray != defaultArray) {
      localStorage.setItem("items", JSON.stringify(infoArray));
    }
  }, [infoArray]);

  const onUpdateHandler = (ind, newData) => {
    let tempArr = [...infoArray];
    tempArr[ind] = newData;
    setInfoArray(tempArr);
    calculateResult(tempArr);
  };

  const calculateResult = (infoArray) => {
    const gradeMap = {
      1: 0,
      2: 5,
      3: 6,
      4: 7,
      5: 8,
      6: 9,
      7: 10,
    };
    let points = 0;
    let credit;
    let sum_credits = 0;
    for (let i = 0; i < infoArray.length; i++) {
      if (infoArray[i].grade === 0 || infoArray[i].credit === 0) {
        continue;
      } else {
        credit = Number(infoArray[i].credit);
      }
      sum_credits += credit;
      let gradept = gradeMap[infoArray[i].grade];
      points += credit * gradept;
    }
    let gpa = points / sum_credits;
    localStorage.setItem("gpa", gpa.toFixed(2));
    // let percent = (gpa * 10).toFixed(0);
  };

  ///testing

  let data = fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "hi",
  });

  ///testing

  return (
    <>
      <Head>
        <title>GPA Calculator</title>
        <meta name="description" content="Simple GPA calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <div className={styles.navbar}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <Image src="logo.svg" fill alt="SRM logo" />
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.heading}>
              <div
                style={{ height: "0.5rem", backgroundColor: "#673ab7" }}
              ></div>
              <div style={{ padding: "1.5rem", fontSize: "24pt" }}>
                <div>Enter your grades</div>
                <div style={{ fontSize: "11pt", marginTop: "1rem" }}>
                  A simple way to calculate you GPA
                </div>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              {infoArray.map((ele, ind) => {
                return (
                  <Subject
                    onUpdate={(newData) => {
                      onUpdateHandler(ind, newData);
                    }}
                    key={ind}
                    data={infoArray[ind]}
                    index={ind}
                  />
                );
              })}
            </div>

            <div className={styles.submitButtonContainer}>
              <Button
                href="/result"
                variant="contained"
                className={styles.submitButton}
                onClick={(e) => {
                  JSON.stringify(defaultArray) === JSON.stringify(infoArray) &&
                    e.preventDefault();
                }}
                style={
                  JSON.stringify(defaultArray) === JSON.stringify(infoArray)
                    ? {
                        backgroundColor: "rgb(209, 209, 209)",
                        color: "rgb(155, 155, 155)",
                      }
                    : {}
                }
              >
                SUBMIT
              </Button>
              <Button
                className={styles.clearButton}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("items", JSON.stringify(defaultArray));
                  localStorage.setItem("gpa", 0);
                  setInfoArray([...defaultArray]);
                }}
              >
                Clear
              </Button>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}
