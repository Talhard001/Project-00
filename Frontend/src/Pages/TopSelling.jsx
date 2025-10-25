import React from "react";
import red from "/30.jpg";
import CategorySlider from "../Components/CategorySlider";
import Footer from "../Components/Footer";

const products = [
  { img: "/32.jpg", name: "SONY CAMERA WITH 3 LENSES", price: "RS 354000" },
  { img: "/31.jpg", name: "RADO WATCH", price: "RS 55000" },
  { img: "/33.jpg", name: "SAMSUNG GALLEXY PHONE", price: "RS 12200" },
  { img: "/8.jpg", name: "ORIGINAL OPPO CABLE", price: "RS 6500" },
];

const lastChance = [
  { img: "/4.jpg", name: "CHARGER AND POWER BANK", oldPrice: "RS 2300", newPrice: "RS 2000", discount: "-23%" },
  { img: "/5.jpg", name: "CHARGING AND DATA CABLE", oldPrice: "RS 1500", newPrice: "RS 1460", discount: "-10%" },
  { img: "/6.jpg", name: "MINIMAL PHONE CASE", oldPrice: "RS 1200", newPrice: "RS 1150", discount: "-15%" },
  { img: "/7.jpg", name: "CABLES", oldPrice: "RS 3500", newPrice: "RS 3450", discount: "-10%" },
];

const TopSelling = () => {
  return (
    <div className="bg-black text-white">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-center bg-black text-white mb-20 px-4">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <img src={red} alt="Highlight" className="w-[300px] md:w-[500px] object-contain" />
        </div>
        <div className="w-full md:w-1/2 bg-black pr-10 py-10 px-4 text-center md:text-left">
          <h2 className="text-yellow-400 text-3xl font-bold">FEATURED PRODUCTS</h2>
          <p className="text-yellow-500 text-xl">ORDER YOURS NOW!</p>
        </div>
      </div>

      {/* Yellow Product Grid Section */}
      <div className="mt-20 bg-white text-black">
  <div className="h-6 sm:h-10" /> {/* Spacer added instead of "hellow" text */}
  <div className="w-full">
    <div className="w-[95%] bg-yellow-400 px-4 sm:px-6 md:px-14 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-black">
      {products.map((item, i) => (
        <div key={i} className="bg-yellow-400 border-[15px] border-t-[20px] border-b-[24px] border-yellow-400">
          <img src={item.img} alt={item.name} className="w-full h-[250px] md:h-[320px] object-cover" />
          <div className="py-2 px-2">
            <h3 className="text-black text-sm font-bold">{item.name}</h3>
            <p className="text-black font-bold text-md mt-1">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Last Chance Header */}
      <div className="text-center font-bold text-black text-xl py-6 bg-white">
        LAST CHANCE TO BUY
      </div>

      {/* Last Chance Grid */}
      <div className="bg-white w-full">
        <div className="w-[95%] mx-auto flex flex-wrap justify-center items-center gap-4 bg-black">
          {lastChance.map((item, i) => (
            <div
              key={i}
              className="bg-black border-t-[10px] border-black text-white w-[90%] sm:w-[45%] md:w-[22%] lg:w-[20%]"
            >
              <img src={item.img} alt={item.name} className="w-full h-[200px] md:h-[300px] object-contain" />
              <div className="p-3">
                <h3 className="font-bold text-center text-sm mb-2">{item.name}</h3>
                <div className="flex items-center justify-center gap-6">
                  <div className="text-sm">
                    <span className="line-through text-gray-400 mr-2">{item.oldPrice}</span>
                    <span className="text-white">{item.newPrice}</span>
                  </div>
                  <div className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    {item.discount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CategorySlider />
      <Footer/>
    </div>
  );
};

export default TopSelling;
