import { useContext } from "react";
import { WidthContext } from "../../pages/_app";
import styles from "./Home.module.scss";

import NavDesktop from "../Navbar/Desktop/NavDesktop";
import NavMobile from "../Navbar/Mobile/NavMobile";
import Hero from "./Hero/Hero";

export default function HomePage() {
  const width = useContext(WidthContext);
  return (
    <>
      {width < 1008 ? <NavMobile /> : <NavDesktop />}
      <Hero />
    </>
  );
}
