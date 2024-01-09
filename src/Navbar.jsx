import Cart from "./Cart";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NavLink from "./NavLink";
import ProfilePicture from "./ProfilePicture";
import { useState } from "react";
function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  function toggleNavLink() {
    setIsOpened(!isOpened);
  }

  return (
    <nav className="flex flex-row justify-between items-center p-5 md:px-20 md:py-10">
      <div className="flex flex-row items-center gap-3 md: gap-7">
        <div className="md:hidden">
          <Hamburger toggleNavLink={toggleNavLink} />
        </div>
        <Logo />
        <ul className="hidden md:block md:flex md:flex-row gap-3">
          <NavLink />
        </ul>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Cart />
        <ProfilePicture />
      </div>
    </nav>
  );
}

export default Navbar;
