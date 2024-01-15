import NumberOfProduct from "./NumberOfProduct";

function ProductCopy({
  potentialBuy,
  setPotentialBuy,
  price,
  addToCart,
  setAddToCart,
}) {
  return (
    <div className="p-5 bg-[color:hsl(223,64%,98%)] md:w-[50%] md:bg-[color:hsl(0,0%,100%)]">
      <small className="text-sm uppercase text-[color:hsl(26,100%,55%)] font-bold">
        Sneaker Company
      </small>
      <h1 className="mt-2.5 mb-3 text-2xl font-bold lg:text-3xl">
        Fall Limited Edition Sneakers
      </h1>
      <p className="mb-5 text-base text-[color:hsl(219,9%,45%)]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <NumberOfProduct
        potentialBuy={potentialBuy}
        setPotentialBuy={setPotentialBuy}
        price={price}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
      />
    </div>
  );
}
export default ProductCopy;
