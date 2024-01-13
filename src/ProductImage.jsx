import { useState } from "react";
import CartCardEmpty from "./CartCardEmpty";
import CartCardWithProduct from "./CartCardWithProduct";

function ProductImage({
  cartOpen,
  setCartOpen,
  potentialBuy,
  setPotentialBuy,
  price
}) {
  const [index, setIndex] = useState(0);

  const productImages = [
    {
      name: "first image",
      url: "src/img/image-product-1.jpg",
      alt: "an image of lether shoe",
    },
    {
      name: "second image",
      url: "src/img/image-product-2.jpg",
      alt: "an image ofa lether shoe",
    },
    {
      name: "third image",
      url: "src/img/image-product-3.jpg",
      alt: "an image ofa lether shoe",
    },
    {
      name: "fourth image",
      url: "src/img/image-product-4.jpg",
      alt: "an image ofa lether shoe",
    },
  ];

  let hasPreve = index > 0;
  let hasNext = index < productImages.length - 1;

  function nextImage() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }
  function preveImage() {
    if (hasPreve) {
      setIndex(index - 1);
    }
  }

  let productImage = productImages[index];

  return (
    <div className="relative z-0 max-w-100">
      <img src={productImage.url} alt={productImage.alt} />
      <img
        src="src/img/icon-previous.svg"
        alt="preve icon"
        onClick={preveImage}
        className="absolute top-[50%] left-5"
      />
      <img
        src="src/img/icon-next.svg"
        alt="next icon"
        onClick={nextImage}
        className="absolute top-[50%] right-5"
      />
      {!cartOpen ? (
        ""
      ) : !potentialBuy ? (
        <CartCardEmpty />
      ) : (
        <CartCardWithProduct
          potentialBuy={potentialBuy}
          setPotentialBuy={setPotentialBuy}
          price={price}
        />
      )}

      {/* <CartCardEmpty /> */}
      {/* <CartCardWithProduct /> */}
    </div>
  );
}

export default ProductImage;

// if potential buy is zero render cartcardempty else render cartcardwith product
// if cartopen is true the render either of those depending
