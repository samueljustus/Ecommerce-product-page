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
    <div className="md:flex md:flex row gap-5 md:justify-between md:items-center md:px-20 md:my-20">
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
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
    </div>
  );
}

export default MainContent;
