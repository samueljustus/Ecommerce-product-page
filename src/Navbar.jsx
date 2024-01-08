import Cart from "./Cart";
import Hamburger from "./Hamburger";
function Navbar() {
  return (
    <nav>
      <div>
        <Hamburger />
        <div>
          <img src="src/img/logo.svg" alt="company logo" />
        </div>
        <ul>
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <Cart />
        <img src="src/img/image-avatar.png" alt="a profile picture" />
      </div>
    </nav>
  );
}

export default Navbar;
