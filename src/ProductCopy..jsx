import NumberOfProduct from "./NumberOfProduct";

function ProductCopy() {
  return (
    <div className="p-5 bg-[color:hsl(223,64%,98%)]">
      <small className="text-sm uppercase text-[color:hsl(26,100%,55%)] font-bold">Sneaker Company</small>
      <h1 className="mt-2.5 mb-3 text-2xl font-bold">Fall Limited Edition Sneakers</h1>
      <p className="mb-5 text-base text-[color:hsl(219,9%,45%)]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <NumberOfProduct />
    </div>
  );
}
export default ProductCopy;
