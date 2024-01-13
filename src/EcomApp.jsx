import MainContent from "./MainContent.jsx";
import Navbar from "./Navbar.jsx";
import { useState } from "react";

function EcomApp() {
  const [potentialBuy, setPotentialBuy] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  let price = 125

  return (
    <div>
      <Navbar
        potentialBuy={potentialBuy}
        setPotentialBuy={setPotentialBuy}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
      />
      <MainContent
        potentialBuy={potentialBuy}
        setPotentialBuy={setPotentialBuy}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        price={price}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
      />
    </div>
  );
}

export default EcomApp;
