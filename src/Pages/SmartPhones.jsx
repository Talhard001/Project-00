import React from "react";
import Footer from "../Components/Footer";

const products = [
  { title: "One Plus", price: 70000, image: "/55.jpg" },
  { title: "Samsung S25+", price: 18000, image: "56.jpg" },
  { title: "Nine Plus", price: 150000, image: "57.jpg" },
  { title: "Iphone 13", price: 20000, image: "58.jpg" },
  { title: "One Plus", price: 99000, image: "59.jpg" },
  { title: "Hawei", price: 60000, image: "60.jpg" },
  { title: "Real me", price: 53000, image: "61.jpg" },
  { title: "Teen Plus", price: 98000, image: "62.jpg" },
  { title: "Eight Plus", price: 93000, image: "63.jpg" },
  { title: "Samsung S25 Ultra", price: 95000, image: "64.jpg" },
  { title: "Seven Plus", price: 90000, image: "65.jpg" },
  { title: "Vivo V50", price: 35000, image: "66.jpg" },
  { title: "Xiaomi", price: 80000, image: "67.jpg" },
  { title: "Xiaomi 20s", price: 50000, image: "68.jpg" },
  { title: "Tecno Canon", price: 40000, image: "69.jpg" },
];

const filters = {
  types: ["Speaker", "Mini Speaker", "Lock Speaker", "Party Speaker", "Event Speakers", "Hand Free", "Earbuds", "Ear Pods"],
  ratings: ["5/5", "4/5", "3.5/5"],
  brands: ["Apple", "Samsung", "Sony", "Redmi", "JBL", "Audionic", "Hellow", "Vivo"],
  soldOut: [
    "70.jpg",
    "71.jpg",
    "72.jpg",
    "73.jpg",
    "74.jpg",
    "75.jpg",
    "76.jpg",
  ]
};

export default function SmartPhones() {
  return (
    <>
    <div className="flex flex-col lg:flex-row bg-black text-white">
      {/* Left: Product Grid */}
      <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {products.map((product, i) => (
          <div key={i} className="bg-white text-black object-contain pt-10">
            <img src={product.image} alt={product.title} className="w-full h-40 mb-3 object-contain" />
            <div className="bg-yellow-400 p-4 text-sm font-bold">
              <p>{product.title.toUpperCase()}</p>
              <p className="text-black">★ ★ ★ ★ ★</p>
              <p className="text-right">RS {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Filters */}
      <div className="w-full lg:w-[300px] p-4 mt-6 bg-yellow-400 text-black text-sm">
        <h3 className="font-bold mb-2">FILTERS:</h3>

        {/* Product Type */}
        <div className="mb-4">
          <p className="font-bold">PRODUCT TYPE</p>
          <div className="grid grid-cols-2 gap-x-4">
            {filters.types.map((type, i) => (
              <label key={i} className="flex items-center font-bold gap-2">
                <input type="checkbox" />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Prize */}
        <div className="mb-4 font-bold">
          <p className="w-full font-bold">PRIZE</p>
          <p>RS 2000 - RS 10000</p>
          <p>RS 50000+</p>
        </div>

        {/* Ratings */}
        <div className="mb-4">
          <p className="font-bold">RATINGS</p>
          {filters.ratings.map((r, i) => (
            <label key={i} className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                {"★".repeat(5 - i)}
                <span className="text-xs">{r}</span>
              </span>
            </label>
          ))}
        </div>

        <div className="mb-4 bg-yellow-400 p-2 rounded">
          <p className="font-semibold">SOLD OUT:</p>
          <div className="grid grid-cols-2 gap-2">
            {filters.soldOut.map((img, i) => (
              <div key={i} className={i === 6 ? 'col-span-2' : ''}>
                <img
                  src={img}
                  alt="sold out"
                  className={`object-contain ${i === 6 ? 'h-56' : 'h-28'} w-full`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
