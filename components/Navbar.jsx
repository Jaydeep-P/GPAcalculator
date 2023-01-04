import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <div className={styles.lhsLogo}>
            <Image src="/logo.png" fill alt="logo" />
          </div>
          <div className={styles.rhsLogo}>
            <div className={styles.rhsLogoTop}>GPA</div>
            <div className={styles.rhsLogoBottom}>CALCULATOR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
