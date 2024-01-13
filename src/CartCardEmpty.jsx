function CartCardEmpty() {
  return (
    <div className="flex flex column justify-center items-center">
      <div className=" mt-5 absolute -top-3 w-[95%] z-5  bg-[color:hsl(0,0%,100%)] rounded-md">
        <div className="p-5  border-b-2 border-[color:hsl(220,14%,75%)]">
          <p className="text-sm font-bold">Cart</p>
        </div>
        <div className="py-20 px-5 flex flex-column justify-center items-center">
          <p className="text-sm text-[color:hsl(219,9%,45%)] font-bold">
            Your cart is empty
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartCardEmpty;
