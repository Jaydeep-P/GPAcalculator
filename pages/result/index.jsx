import React from "react";
import Image from "next/image";
import Chart from "../../components/Chart";
import styles from "../../styles/Result.module.css";
import homeStyles from "../../styles/Home.module.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
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

function index() {
  return (
    <>
      <div className={homeStyles.navbar}>
        <div className={homeStyles.logoContainer}>
          <div className={homeStyles.logo}>
            <Image src="logo.svg" fill />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <Head>
          <title>GPA Calculator</title>
          <meta name="description" content="Simple GPA calculator" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <div className={styles.container}>
            <div className={styles.tile} style={{ height: "10rem" }}>
              <div className={styles.gpaContainer}>
                Your Gpa is <div style={{ fontSize: "5rem" }}>9.9</div>
              </div>
            </div>
            <div className={styles.tile} style={{ flexDirection: "column" }}>
              <div className={styles.chartContainer}>
                <Chart />
              </div>
              <div className={styles.rankContainer}>
                Your score is above 50%
              </div>
            </div>
            <div className={styles.backButtonContainer}>
              <Button
                href="/"
                variant="contained"
                className={styles.backButton}
              >
                Back
              </Button>
            </div>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default index;
