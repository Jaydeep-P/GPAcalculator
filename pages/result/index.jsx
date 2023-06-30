import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Chart from "../../components/Chart";
import styles from "../../styles/Result.module.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
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
  const [showTroll, setShowTroll] = useState(true);
  const [gpa, setGPA] = useState("...");

  const videoRef = useRef();

  useEffect(() => {
    let gpa = localStorage.getItem("gpa");
    if (gpa == "NaN" || gpa == null) {
      gpa = 0.0;
    }
    setGPA(gpa);
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <Head>
          <title>GPA Calculator</title>
          <meta name="description" content="Simple GPA calculator" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={"/GPAcalculator" + "/favicon.png"} />
        </Head>
        <ThemeProvider theme={theme}>
          <div className={styles.container}>
            <div className={styles.tile} style={{ height: "10rem" }}>
              <div className={styles.gpaContainer}>
                Your GPA is <div style={{ fontSize: "5rem" }}>{gpa}</div>
              </div>
            </div>
            <div className={styles.tile} style={{ flexDirection: "column" }}>
              <div className={styles.chartContainer}>
                <Chart />
              </div>
            </div>
            <div className={styles.backButtonContainer}>
              <Button
                href={"/GPAcalculator"}
                variant="contained"
                className={styles.backButton}
              >
                Back
              </Button>
            </div>

            <div
              className={styles.tile}
              style={{
                aspectRatio: "1.6/1",
                padding: 0,
                overflow: "hidden",
              }}
              onClick={() => {
                // console.log(videoRef);

                videoRef.current.play();
                setShowTroll(false);
              }}
            >
              <video height="100%" ref={videoRef}>
                <source
                  src="https://raw.githubusercontent.com/Jaydeep-P/GPAcalculator/main/public/short.mp4"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support videos.
              </video>
              {showTroll && (
                <div className={styles.spoilerContainer}>
                  <Image fill src={"/cutecat.jpg"} alt="SPOILER" />
                  <div className={styles.spoiler}>Click me</div>
                </div>
              )}
            </div>
          </div>
          <Footer troll={!showTroll} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default index;
