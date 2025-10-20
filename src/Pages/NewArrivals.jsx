import React from "react";
import red from "/16.jpg";
import red1 from "/17.jpg";
import red2 from "/18.jpg";
import red3 from "/19.jpg";
import red4 from "/20.jpg"; // Flash Lights
import red5 from "/21.jpg"; // Camera Bags
import red6 from "/22.jpg"; // Laptop Stands
import Footer from "../Components/Footer";

const products = [
  {
    name: "CAMERA STAND",
    price: "RS 75000",
    img: "/11.jpg",
  },
  {
    name: "CAMERA HOLDER",
    price: "RS 55000",
    img: "/12.jpg",
  },
  {
    name: "CABLE WIRE",
    price: "RS 10000",
    img: "/5.jpg",
  },
  {
    name: "CAMERA STAND",
    price: "RS 80999",
    img: "/13.jpg",
  },
  {
    name: "EAR PHONES",
    price: "RS 35000",
    img: "/14.jpg",
  },
  {
    name: "SMART WATCH",
    price: "RS 10000",
    img: "/15.jpg",
  },
];

const NewArrivals = () => {
  return (
    <>
      <div className="bg-white">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-yellow-400">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white flex items-center pt-14 pb-14 rounded shadow-md"
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="h-32 w-40 object-contain"
              />

              {/* Product Info */}
              <div className="text-center flex-1">
                <h2 className="font-bold text-lg">{product.name}</h2>
                <div className="text-black">★★★★★</div>
                <p className="font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Samsung Banner */}
        <div className="text-black font-bold text-2xl py-8 text-center">
          <p className="text-sm tracking-wide font-semibold">TRENDING NOW</p>
          <div className="bg-black">
            <div className="flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-36 mt-4">
              <img src={red} alt="Samsung Phones" className="w-80 md:w-96" />
              <div className="md:ml-10 text-left mt-4 md:mt-0">
                <h2 className="text-4xl font-extrabold text-yellow-400">
                  SAMSUNG PHONES
                </h2>
                <p className="text-yellow-400 mt-2 font-medium">
                  ONLY 7 LEFT IN STOCK!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AudioInc Banner */}
        <div className="bg-yellow-400 flex flex-col md:flex-row justify-between items-center   p-6">
          <div className="text-left px-6 md:px-20">
            <h2 className="font-extrabold text-4xl md:text-5xl">
              AUDIOINC EAR PHONES
            </h2>
            <p className="font-semibold mt-2 text-xl md:text-2xl">
              OWNED BY 79K PEOPLE NOW!
            </p>
          </div>
          <img src={red1} alt="AudioInc" className="w-64 md:w-80 mt-4 md:mt-0" />
        </div>
      </div>

     {/* Phone Cases + Categories */}
<div className="py-4 px-2">
  <h3 className="text-center text-black font-semibold text-lg uppercase mb-8">
    Categories
  </h3>

  {/* Flex instead of Grid */}
  <div className="flex flex-wrap justify-center gap-20">
    {/* Flash Lights */}
    <div className="border-2 border-yellow-400 w-[200px] pt-8 flex flex-col items-center">
      <img
        src={red4}
        alt="Flash Lights"
        className="w-[120px] h-[120px] object-contain mb-2 "
      />
      <h4 className="bg-yellow-400 text-black font-bold py-2 px-4 text-sm text-center w-full">
        FLASH LIGHTS
      </h4>
    </div>

    {/* Camera Bags */}
    <div className="border-2 border-yellow-400 w-[200px] pt-8 flex flex-col items-center">
      <img
        src={red5}
        alt="Camera Bags"
        className="w-[120px] h-[120px] object-contain mb-2"
      />
      <h4 className="bg-yellow-400 text-black font-bold py-2 px-5 text-sm text-center w-full">
        CAMERA BAGS
      </h4>
    </div>

    {/* Laptop Stands */}
    <div className="border-2 border-yellow-400 w-[200px] pt-8 flex flex-col items-center">
      <img
        src={red6}
        alt="Laptop Stands"
        className="w-[70px] h-[120px] object-contain mb-2"
      />
      <h4 className="bg-yellow-400 text-black font-bold py-2 px-4 text-sm text-center w-full">
        LAPTOP STANDS
      </h4>
    </div>
  </div>
</div>

    <Footer/>
    </>
  );
};

export default NewArrivals;
