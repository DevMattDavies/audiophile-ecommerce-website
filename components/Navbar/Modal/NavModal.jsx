import styles from "./NavModal.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";
import Menu from "../../Home/Menu/Menu";

export default function NavModal() {
  const width = useContext(WidthContext);
  return (
    <>
      <div className={styles.background}></div>
      <div className={width <= 480 ? styles.modalMobile : styles.modalDesktop}>
        <Menu />
      </div>
    </>
  );
}
