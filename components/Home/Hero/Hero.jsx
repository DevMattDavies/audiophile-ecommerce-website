import styles from "./Hero.module.scss";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";

export default function Hero() {
  const width = useContext(WidthContext);
  return (
    <div className={styles.hero}>
      <img
        className={styles.hero__image}
        src={
          width <= 480
            ? "/assets/home/mobile/image-header.jpg"
            : width > 480 && width < 1008
            ? "/assets/home/tablet/image-header.jpg"
            : "/assets/home/desktop/image-hero.jpg"
        }
      ></img>
    </div>
  );
}
