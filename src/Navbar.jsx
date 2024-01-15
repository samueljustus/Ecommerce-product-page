import Cart from "./Cart";
import CloseHamburger from "./CloseHamburger";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import ProfilePicture from "./ProfilePicture";
import { useState } from "react";
function Navbar({
  potentialBuy,
  setPotentialBuy,
  cartOpen,
  setCartOpen,
  price,
  addToCart,
  setAddToCart,
}) {
  const navLinks = [
    { href: "#collections", label: "Collection", id: 0 },
    { href: "#men", label: "Men", id: 1 },
    { href: "#women", label: "Women", id: 2 },
    { href: "#about", label: "About", id: 3 },
    { href: "#contact", label: "Contact", id: 4 },
  ];

  const [isOpened, setIsOpened] = useState(false);

  function toggleNavLink() {
    setIsOpened(!isOpened);
  }

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  return (
    <nav className="flex flex-row justify-between items-center p-5 md:mx-20 md:py-10 md:border-b md:border-[color:hsl(219,9%,45%)]">
      <div className="flex flex-row items-center gap-3 md: gap-7">
        <div className="md:hidden z-20">
          {isOpened ? (
            <CloseHamburger toggleNavLink={toggleNavLink} />
          ) : (
            <Hamburger toggleNavLink={toggleNavLink} />
          )}
        </div>
        <Logo />
        <ul className="hidden md:block md:flex md:flex-row gap-3">
          {navLinks.map((navLink) => (
            <li
              className="text-sm font-bold text-[color:hsl(219,9%,45%)] hover:text-[color:hsl(220,13%,13%)] cursor-pointer"
              key={navLink.id}
            >
              {navLink.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-4 items-center justify-between md:gap-7 ">
        <Cart
          potentialBuy={potentialBuy}
          setPotrntialBuy={setPotentialBuy}
          toggleCart={toggleCart}
          addToCart={addToCart}
          setAddToCart={setAddToCart}
        />
        <ProfilePicture />
      </div>
      {isOpened && (
        <div className="md:hidden fixed top-0 left-0 h-screen z-10 w-[70%] bg-[color:hsl(223,64%,98%)]">
          <ul className="mt-20 p-5">
            {navLinks.map((navLink) => (
              <li className="mb-3.5 text-xl font-bold" key={navLink.id}>
                {navLink.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
