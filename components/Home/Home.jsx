import { useContext } from "react";
import { WidthContext } from "../../pages/_app";
import styles from "./Home.module.scss";

// import NavDesktop from "../Navbar/Desktop/NavDesktop";
// import NavMobile from "../Navbar/Mobile/NavMobile";
import Hero from "./Hero/Hero";
import Menu from "./Menu/Menu";

export default function HomePage() {
  const width = useContext(WidthContext);
  return (
    <>
      <Hero />
      <div
        className={width < 1008 ? styles.contentTablet : styles.contentDesktop}
      >
        <Menu />
      </div>
    </>
  );
}
