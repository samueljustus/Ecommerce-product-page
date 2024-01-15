import { useState } from "react";
import CartCardEmpty from "./CartCardEmpty";
import CartCardWithProduct from "./CartCardWithProduct";

function ProductImage({
  cartOpen,
  setCartOpen,
  potentialBuy,
  setPotentialBuy,
  price,
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

  function handleSmallImage(index) {
    setIndex(index);
  }

  let productImage = productImages[index];

  return (
    <>
      <div className="z-0 md:w-[50%] relative">
        <img
          src={productImage.url}
          alt={productImage.alt}
          className="md:rounded-lg"
        />
        <img
          src="src/img/icon-previous.svg"
          alt="preve icon"
          onClick={preveImage}
          className="md:hidden bg-[color:hsl(0,0%,100%)] p-5 rounded-full absolute top-[50%] left-5"
        />
        <img
          src="src/img/icon-next.svg"
          alt="next icon"
          onClick={nextImage}
          className="md:hidden bg-[color:hsl(0,0%,100%)] p-5 rounded-full absolute top-[50%] right-5"
        />

        <div className="hidden md:flex md:justify-between md:w-[100%] md:max-w-[100%] mt-5 md:gap-2">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="md:flex md:flex row md:w-20 hover:border hover:border-[color:hsl(26,100%,55%)] rounded-lg"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="md:rounded-lg md:hover:opacity-50"
                onClick={() => {
                  handleSmallImage(index);
                }}
              />
            </div>
          ))}
        </div>
      </div>
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
    </>
  );
}

export default ProductImage;

// if potential buy is zero render cartcardempty else render cartcardwith product
// if cartopen is true the render either of those depending
