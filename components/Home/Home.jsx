import { useContext } from "react";
import { WidthContext } from "../../pages/_app";
import styles from "./Home.module.scss";

import NavDesktop from "../Navbar/Desktop/NavDesktop";
import Hero from "./Hero/Hero";

export default function HomePage() {
  const width = useContext(WidthContext);
  return (
    <>
      <NavDesktop />
      <Hero />
    </>
  );
}
