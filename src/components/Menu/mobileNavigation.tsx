import { NavLinks } from "./navLinks";
import { Nav } from "./styles";
import { CgMenuRound } from 'react-icons/cg';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { CgCloseO } from 'react-icons/cg';
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

export function MobileNavigation() {
  
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <HiOutlineMenuAlt1  className="Hamburger" size="30px" color="#000" onClick={() => setOpen(!open)} />

  const closeIcon = <AiOutlineClose className="Hamburger" size="30px" color="#000" onClick={() => setOpen(!open)} />

  const closeMobileMenu = () => setOpen(false);

  return (
    <Nav>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </Nav>
  );
}