import styles from "./NavMobile.module.scss";
import { useContext, useState } from "react";
import { WidthContext } from "../../../pages/_app";
import Link from "next/link";
import NavModal from "../Modal/NavModal";

import CloseIcon from "@mui/icons-material/Close";

export default function NavMobile() {
  const width = useContext(WidthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <>
      <div className={styles.nav}>
        {isMenuOpen ? (
          <CloseIcon
            onClick={menuToggleHandler}
            style={{ fontSize: "20px", color: "white" }}
          />
        ) : (
          <img
            className={styles.nav__hamburger}
            src="/assets/shared/tablet/icon-hamburger.svg"
            onClick={menuToggleHandler}
          ></img>
        )}
        <Link href="/">
          <a>
            <img
              className={styles.nav__logo}
              src="/assets/shared/desktop/logo.svg"
            ></img>
          </a>
        </Link>
        <img
          className={styles.nav__basket}
          src="/assets/shared/desktop/icon-cart.svg"
        ></img>
      </div>
      {isMenuOpen && <NavModal />}
    </>
  );
}
