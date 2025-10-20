import React from "react";
import red1 from "/23.jpg"; // Sample image
import red2 from "/24.jpg";
import red3 from "/20.jpg";
import red4 from "/22.jpg";
import red5 from "/25.jpg";
import red6 from "/26.jpg";
import red7 from "/12.jpg";
import red8 from "/21.jpg";
import red9 from "/27.jpg";
import red10 from "/22.jpg";
import red11 from "/15.jpg";
import red12 from "/9.jpg";
import red13 from "/10.jpg";
import red14 from "/14.jpg";
import red15 from "/28.jpg";
import Footer from "../Components/Footer";



const products = [
  { name: "HAND FREE", price: "RS 55000", img: red1 },
  { name: "SPEAKER", price: "RS 5500", img: red2 },
  { name: "TORCH", price: "RS 3500", img: red3 },
  { name: "LAPTOP STAND", price: "RS 6500", img: red4 },
  { name: "HEAD PHONE", price: "RS 4000", img: red5 },
  { name: "HEAD PHONES", price: "RS 2050", img: red6 },
  { name: "CANON CAMERA", price: "RS 2050", img: red7 },
  { name: "CAMERA HOLDER", price: "RS 2050", img: red8 },
  { name: "CAMERA BAG", price: "RS 2050", img: red9 },
  { name: "EAR BUDS", price: "RS 2050", img: red10 },
  { name: "LAPTOP STAND", price: "RS 2050", img: red11 },
  { name: "SMART WATCH", price: "RS 2050", img: red12 },
  { name: "DATA CABLE", price: "RS 2050", img: red13 },
  { name: "CABLE", price: "RS 2050", img: red14 },
  { name: "EARPODS", price: "RS 2050", img: red15 },
  
];

const ProductDetails = () => {
  return (
    <>
    <div className="bg-black text-white flex flex-col md:flex-row">
      {/* Product Section */}
      <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
        {products.map((item, index) => (
          <div key={index} className="bg-white text-black shadow">
            <img src={item.img} alt={item.name} className="w-full h-[300px] object-contain bg-white" />
            <div className="bg-yellow-400 text-black py-2 px-2 font-bold text-1xl">
              {item.name}
            </div>
            <div className=" ">
              <div className="text-black bg-yellow-400 text-sm px-2">★★★★★</div>
              <div className="font-bold text-right bg-yellow-400 pb-3 pr-2">{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Sidebar */}
  <div className="w-full md:w-1/4 bg-yellow-400 text-black p-4">
  <h2 className="text-xl font-bold mb-4 text-black">FILTERS:</h2>

  {/* Product Type */}
  <div className="mb-4">
    <h3 className="font-semibold text-black">PRODUCT TYPE</h3>
    <div className="flex gap-8 mt-1 text-sm">
      <div className="flex flex-col gap-1 w-1/2">
        {[
          "Wire", "Data Cables", "Cameras", "Laptop", "Tablets", "Laptop Stand",
          "Camera Stand", "Storage Light", "Lens", "Ear Pods", "Ear Phones"
        ].map((type, i) => (
          <label key={i} className="flex items-center text-black">
            <input type="checkbox" className="mr-2" />
            {type}
          </label>
        ))}
      </div>
      <div className="flex flex-col gap-1 w-1/2">
        {[
          "Phone Cases", "Charger", "Hand Free", "Speakers", "Diffuser",
          "Camera Holder", "Smartwatch", "Power Bank", "Adapter", "Internet Devices"
        ].map((type, i) => (
          <label key={i} className="flex items-center text-black">
            <input type="checkbox" className="mr-2" />
            {type}
          </label>
        ))}
      </div>
    </div>
  </div>

  {/* Price Range */}
  <div className="mb-4">
    <h3 className="font-semibold text-black">PRICE</h3>
    <div className="flex flex-col text-base font-semibold mt-1 gap-2 text-black">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        RS 2000 – RS 10000
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        RS 50000+
      </label>
    </div>
  </div>

  {/* Ratings */}
  <div className="mb-4">
    <h3 className="font-semibold text-black">RATINGS</h3>
    <div className="flex flex-col text-sm mt-1 gap-1">
      <label className="flex items-center text-black">
        <input type="checkbox" className="mr-2" />
        <span className="text-yellow-600">★★★★★</span>
      </label>
      <label className="flex items-center text-black">
        <input type="checkbox" className="mr-2" />
        <span className="text-yellow-600">★★★★☆</span>
      </label>
      <label className="flex items-center text-black">
        <input type="checkbox" className="mr-2" />
        <span className="text-yellow-600">★★★☆☆</span>
      </label>
    </div>
  </div>

  {/* Brands */}
  <div className="mb-4">
    <h3 className="font-semibold text-black">BRANDS</h3>
    <div className="grid grid-cols-2 gap-1 text-sm mt-1">
      {[
        "LG", "APPLE", "SAMSUNG", "OPPO", "INFINIX", "CANON",
        "NOKIA", "SONY", "REDMI", "NIKON", "AMAZON", "AMOI",
        "BIRD", "BLACKBERRY", "HUAWEI", "LENOVO", "REALME",
        "SONY ERICSSON", "VIVO", "XIAOMI", "ALCATEL", "ALLVIEW"
      ].map((brand, i) => (
        <label key={i} className="flex items-center text-black">
          <input type="checkbox" className="mr-2" />
          {brand}
        </label>
      ))}
    </div>
  </div>

  {/* Memory */}
  <div className="mb-4">
    <h3 className="font-semibold mb-1 text-black">MEMORY</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {["16 GB", "32 GB", "62 GB", "128 GB", "250 GB"].map((mem, i) => (
        <button
          key={i}
          className="bg-black text-white text-xs px-2 py-1 rounded hover:bg-gray-700"
        >
          {mem}
        </button>
      ))}
    </div>
  </div>

  {/* Sold Out Items */}
 <div>
 <h3 className="font-semibold mb-2 text-black">SOLD OUT:</h3>
<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
  {["/5.jpg", "/4.jpg", "/7.jpg", "/11.jpg"].map((img, i) => (
    <div
      key={i}
      className="w-[130px] h-[200px] overflow-hidden bg-gray-100 flex items-center justify-center"
    >
      <img
        src={img}
        alt="Sold"
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>


  <h3 className="font-semibold mb-2 text-black">FEATURED IMAGE:</h3>
<div className="flex flex-col items-center sm:items-start">
  {/* Featured Image */}
  <div className="w-[270px] h-[200px] flex justify-center items-center overflow-hidden border-[2px] bg-white mb-4">
    <img
      src="/29.jpg"
      alt="Featured"
      className="h-[260px] w-[263px] object-cover"
    />
  </div>

  {/* Thumbnails */}
  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
    {["/5.jpg", "/4.jpg", "/7.jpg", "/11.jpg"].map((img, i) => (
      <div
        key={i}
        className="w-[130px] h-[200px] overflow-hidden bg-gray-100 flex items-center justify-center"
      >
        <img
          src={img}
          alt="Thumbnail"
          className="w-full h-full object-cover border-[2px] bg-white"
        />
      </div>
    ))}
  </div>
</div>

</div>



</div>


    </div>
     
     <Footer/>
    </>
  );
};

export default ProductDetails;
  