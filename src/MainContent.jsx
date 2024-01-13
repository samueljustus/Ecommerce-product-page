import ProductCopy from "./ProductCopy.";
import ProductImage from "./ProductImage";

function MainContent({
  potentialBuy,
  setPotentialBuy,
  cartOpen,
  setCartOpen,
  price,
  addToCart,
  setAddToCart,
}) {
  return (
    <div>
      <ProductImage
        potentialBuy={potentialBuy}
        setPotentialBuy={setPotentialBuy}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        price={price}
      />
      <ProductCopy
        potentialBuy={potentialBuy}
        setPotentialBuy={setPotentialBuy}
        price={price}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
      />
    </div>
  );
}

export default MainContent;
