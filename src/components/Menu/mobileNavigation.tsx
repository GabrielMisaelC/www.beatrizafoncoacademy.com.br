import { NavLinks } from "./navLinks";
import { Nav } from "./styles";
import { CgMenuRound } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';
import { useState } from "react";

export function MobileNavigation() {
  
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <CgMenuRound  className="Hamburger" size="40px" color="#000" onClick={() => setOpen(!open)} />

  const closeIcon = <CgCloseO className="Hamburger" size="40px" color="#000" onClick={() => setOpen(!open)} />

  const closeMobileMenu = () => setOpen(false);

  return (
    <Nav>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </Nav>
  );
}