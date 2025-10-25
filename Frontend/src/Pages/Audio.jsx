import React from "react";
import Footer from "../Components/Footer";

const products = [
  { title: "Speaker with Strap", price: 8500, image: "/40.jpg" },
  { title: "Speaker", price: 6500, image: "41.jpg" },
  { title: "UBL Speakers", price: 15000, image: "42.jpg" },
  { title: "Mini Speaker", price: 5500, image: "43.jpg" },
  { title: "Mini Lock Speaker", price: 4500, image: "44.jpg" },
  { title: "Sony Speaker", price: 8500, image: "45.jpg" },
  { title: "Event Speakers", price: 95000, image: "46.jpg" },
  { title: "JBL Mini", price: 5500, image: "47.jpg" },
  { title: "Speaker", price: 9500, image: "48.jpg" },
  { title: "Audionic Speaker", price: 5000, image: "49.jpg" },
  { title: "Party Speaker", price: 12000, image: "50.jpg" },
  { title: "Quality Voice", price: 8000, image: "51.jpg" },
  { title: "Small Speaker", price: 8000, image: "52.jpg" },
  { title: "Lock Speaker", price: 8000, image: "53.jpg" },
  { title: "Ptable Speaker", price: 8000, image: "54.jpg" },
];

const filters = {
  types: ["Speaker", "Mini Speaker", "Lock Speaker", "Party Speaker", "Event Speakers", "Hand Free", "Earbuds", "Ear Pods"],
  ratings: ["5/5", "4/5", "3.5/5"],
  brands: ["Apple", "Samsung", "Sony", "Redmi", "JBL", "Audionic", "Hellow", "Vivo"],
  soldOut: [
    "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg"
  ]
};

export default function Audio() {
  return (
    <>
    <div className="flex flex-col lg:flex-row bg-black text-white">
      
      {/* Left: Product Grid */}
      <div className="lg:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map((product, i) => (
          <div key={i} className="bg-white text-black pt-6 rounded shadow-sm">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2" />
            <div className="bg-yellow-400 p-4 text-sm font-bold">
              <p>{product.title.toUpperCase()}</p>
              <p className="text-black">★ ★ ★ ★ ★</p>
              <p className="text-right">RS {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Filters */}
      <div className="lg:w-[300px] w-full p-4 bg-yellow-400 text-black text-sm">
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

        {/* Price */}
        <div className="mb-4 font-bold">
          <p className="font-bold">PRIZE</p>
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

        {/* Brands */}
        <div className="mb-4">
          <p className="font-bold">BRANDS</p>
          <div className="grid grid-cols-2 font-bold gap-x-4">
            {filters.brands.map((b, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" />
                <span>{b}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Sold Out */}
        <div className="mb-4">
         <p className="font-semibold text-lg mb-4">SOLD OUT:</p>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
  {filters.soldOut.map((img, i) => (
    <div key={i} className={i === 6 ? 'col-span-2 sm:col-span-3' : ''}>
      <img
        src={img}
        alt="sold out"
        className={`object-cover rounded-md w-full ${i === 6 ? 'h-64' : 'h-40'}`}
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
