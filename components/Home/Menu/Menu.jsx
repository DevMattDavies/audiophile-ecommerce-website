import styles from "./Menu.module.scss";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";
import Link from "next/link";

export default function Menu() {
  const width = useContext(WidthContext);
  return (
    <div
      className={styles.menu}
      style={{ flexDirection: width <= 480 ? "column" : "row" }}
    >
      <div className={styles.menu__item}>
        <img
          className={styles.menu__image}
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        ></img>
        <h4 className={styles.menu__title}>headphones</h4>
        <Link href="/headphones">
          <a className={styles.menu__link}>
            shop
            <img
              className={styles.menu__arrow}
              src="/assets/shared/desktop/icon-arrow-right.svg"
            ></img>
          </a>
        </Link>
      </div>
      <div className={styles.menu__item}>
        <img
          className={styles.menu__image}
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        ></img>
        <h4 className={styles.menu__title}>speakers</h4>
        <Link href="/speakers">
          <a className={styles.menu__link}>
            shop
            <img
              className={styles.menu__arrow}
              src="/assets/shared/desktop/icon-arrow-right.svg"
            ></img>
          </a>
        </Link>
      </div>
      <div className={styles.menu__item}>
        <img
          className={styles.menu__image}
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        ></img>
        <h4 className={styles.menu__title}>earphones</h4>
        <Link href="/earphones">
          <a className={styles.menu__link}>
            shop
            <img
              className={styles.menu__arrow}
              src="/assets/shared/desktop/icon-arrow-right.svg"
            ></img>
          </a>
        </Link>
      </div>
    </div>
  );
}
