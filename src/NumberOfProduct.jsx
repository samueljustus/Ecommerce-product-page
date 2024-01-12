function NumberOfProduct() {
  return (
    <div>
      <div className="flex flex row justify-between item-center">
        <div className="flex flex row justify-between gap-5 item-center">
          <p className="text-xl">125.00</p>
          <p className="bg-[color:hsl(25,100%,94%)] text-[color:hsl(26,100%,55%)] px-1.5 text-sm rounded ">
            50%
          </p>
        </div>
        <p className="text-[color:hsl(220,14%,75%)] text-sm line-through">
          $250.00
        </p>
      </div>
      <div>
        <div className="mt-7 flex justify-between items-center">
          <div>
            <img src="src/img/icon-minus.svg" alt="subtraction image" />
          </div>
          <div>
            <p>0</p>
          </div>
          <div>
            <img src="src/img/icon-plus.svg" alt="addition image" />
          </div>
        </div>
        <div className="mt-5 mb-5">
          <button className="flex px-5 py-2 bg-[color:hsl(26,100%,55%)] w-full justify-center items-center gap-3 text-[color:hsl(223,64%,98%)]">
            <span>
              <img
                src="src/img/icon-cart.svg"
                alt="image of a shoping cart basket"
                className="w-5 h-5"
              />
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumberOfProduct;
