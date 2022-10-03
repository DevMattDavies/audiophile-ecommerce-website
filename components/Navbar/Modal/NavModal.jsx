import styles from "./NavModal.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";

export default function NavModal() {
  const width = useContext(WidthContext);
  return (
    <div
      className={styles.modal}
      style={{ flexDirection: width <= 480 ? "column" : "row" }}
    >
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
  );
}
