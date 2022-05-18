import React, { useRef, useState } from "react";
import DesktopNavbar from "../navbar/desktop-navbar/desktop-nav";
import MobileNavbar from "../navbar/mobile-navbar/mobile-nav";
import HamburgerMenu from "../ui/hamburger-menu/hamburger-menu";
import Logo from "../ui/logo/logo";

import styles from "./header.module.css";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      style={isActive ? { position: "fixed" } : { position: "relative" }}
      className={styles.header}
    >
      <Logo />
      <HamburgerMenu handleClick={handleClick} />
      {isActive && <MobileNavbar handleClick={handleClick} />}
      <DesktopNavbar />
    </header>
  );
};

export default Header;
