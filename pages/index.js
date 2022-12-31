import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Subject from "../components/Subject";
import { useState } from "react";

export default function Home() {
  const [infoArray, setInfoArray] = useState([
    { grade: "", credit: "" },
    { grade: "", credit: "" },
    { grade: "", credit: "" },
    { grade: "", credit: "" },
    { grade: "", credit: "" },
    { grade: "", credit: "" },
    { grade: "", credit: "" },
  ]);

  const onUpdateHandler = (ind, newData) => {
    let tempArr = [...infoArray];
    tempArr[ind] = newData;
    setInfoArray(tempArr);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Simple GPA calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
      </main>
    </>
  );
}
