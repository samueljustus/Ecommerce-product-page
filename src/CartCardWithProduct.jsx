import Button from "./button";

function CartCardWithProduct({ potentialBuy, setPotentialBuy, price }) {
  return (
    <div className="flex flex column justify-center items-center">
      <div className=" mt-5 absolute -top-3 w-[95%] z-5  bg-[color:hsl(0,0%,100%)] rounded-md">
        <div className="p-5  border-b-2 border-[color:hsl(220,14%,75%)]">
          <p className="text-sm font-bold">Cart</p>
        </div>
        <div className="px-5 pb-10">
          <div className="py-7 flex justify-between items-center gap-1">
            <div>
              <img
                src="src/img/image-product-1-thumbnail.jpg"
                alt=""
                className="w-10 h-10"
              />
            </div>
            <div>
              <p className="text-sm text-[color:hsl(219,9%,45%)] font-semibold">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-sm text-[color:hsl(219,9%,45%)] font-semibold">
                ${price}.00 x {potentialBuy}.00{" "}
                <span className="font-extrabold text-black">${price * potentialBuy}.00</span>
              </p>
            </div>
            <div>
              <img src="src/img/icon-delete.svg" alt="" />
            </div>
          </div>
          <Button text="checkout"  />
        </div>
      </div>
    </div>
  );
}

export default CartCardWithProduct;
