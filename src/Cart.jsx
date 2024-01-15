function Cart({
  potentialBuy,
  setPotentialBuy,
  toggleCart,
  addToCart,
  setAddToCart,
}) {
  return (
    <div className="relative">
      <img
        src="src/img/icon-cart.svg"
        alt="a cart icon that shows how many items we want to buy"
        onClick={toggleCart}
        className="cursor-pointer"
      />
      {addToCart ? (
        <span className="absolute bg-[color:hsl(26,100%,55%)] px-2 py-0 rounded-lg text-[8px] text-white -top-1 left-3">
          {potentialBuy}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;
