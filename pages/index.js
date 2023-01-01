import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Subject from "../components/Subject";
import { useState } from "react";

export default function Home() {
  const [infoArray, setInfoArray] = useState([
    { grade: 0, credit: 0 },
    { grade: 0, credit: 0 },
    { grade: 0, credit: 0 },
    { grade: 0, credit: 0 },
    { grade: 0, credit: 0 },
    { grade: 0, credit: 0 },
    { grade: 0, credit: 0 },
    { grade: 0, credit: 0 },
  ]);

  const [finalGPA, setGPA] = useState(0);

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
    setGPA(gpa.toFixed(2));
    let percent = (gpa * 10).toFixed(0);
  };

  return (
    <>
      <Head>
        <title>GPA calculator</title>
        <meta
          name="description"
          content="Simple GPA calculator made for SRM students."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.navbar}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Image src="logo.svg" fill />
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.heading}>
            <div style={{ height: "0.5rem", backgroundColor: "#673ab7" }}></div>
            <div style={{ padding: "1.5rem", fontSize: "24pt" }}>
              <div>
                {finalGPA === "NaN" || finalGPA === 0
                  ? "Enter your grades"
                  : `Calculated GPA is ${finalGPA}`}
              </div>
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
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
