import styles from "./NavDesktop.module.scss";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";
import Link from "next/link";

export default function NavDesktop() {
  const width = useContext(WidthContext);
  return (
    <div className={styles.nav}>
      <img
        className={styles.nav__logo}
        src="/assets/shared/desktop/logo.svg"
      ></img>
      <div className={styles.nav__links}>
        <Link href="/">
          <a className={styles.nav__link}>home</a>
        </Link>
        <Link href="/headphones">
          <a className={styles.nav__link}>headphones</a>
        </Link>
        <Link href="/speakers">
          <a className={styles.nav__link}>speakers</a>
        </Link>
        <Link href="/earphones">
          <a className={styles.nav__link}>earphones</a>
        </Link>
      </div>
      <img className={styles.nav__basket} src='/assets/shared/desktop/icon-cart.svg'></img>
    </div>
  );
}
