import React, { useRef, useState } from "react";
import DesktopNavbar from "../navbar/desktop-navbar/desktop-nav";
import MobileNavbar from "../navbar/mobile-navbar/mobile-nav";
import HamburgerMenu from "../ui/hamburger-menu/hamburger-menu";
import Logo from "../ui/logo/logo";

import styles from "./header.module.css";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef<HTMLUListElement>(null);

  const handleClick = () => {
    headerRef.current!.classList.toggle(styles.headerActive);
    setIsActive(!isActive);
  };

  return (
    <header ref={headerRef} className={styles.header}>
      <Logo />
      <HamburgerMenu handleClick={handleClick} />
      {isActive && <MobileNavbar />}
      <DesktopNavbar />
    </header>
  );
};

export default Header;
