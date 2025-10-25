import React from "react";
import Footer from "./Footer";

import red from "/2.jpg";
import red1 from "/3.jpg";
import red2 from "/4.jpg";
import red3 from "/5.jpg";
import red4 from "/6.jpg";
import red5 from "/7.jpg";
import red6 from "/8.jpg";
import red7 from "/9.jpg";
import red8 from "/10.jpg";


const Sale = () => {
  const productImages = [red2, red3, red4, red5];

  return (
    <>
    <div className="bg-white font-sans">
      {/* Flash Sale Banner */}
      <section className="bg-yellow-500 w-full h-screen py-8 px-4 md:px-16 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Left Image */}
        <div className="w-[350px] h-[400px] flex-shrink-0 flex items-center justify-center">
          <img src={red} alt="Headphones Left" className="object-contain w-full h-full" />
        </div>

        {/* Text */}
        <div className="text-center lg:text-left space-y-2">
          <h2 className="text-6xl font-bold uppercase text-black">Flash Sale</h2>
          <p className="font-medium text-2xl text-black">Bluetooth Headphones</p>
          <div className="text-xl font-bold pt-10 text-black">
          <div>Rs 33,599</div>
          <div className="line-through text-3xl text-gray-800">Rs 35,000</div>
        </div>

        </div>

        {/* Right Image */}
        <div className="w-[350px] h-[400px] flex-shrink-0 flex items-center justify-center">
          <img src={red1} alt="Headphones Right" className="object-contain w-full h-full" />
        </div>
      </section>

      {/* Tabs */}
      <div className="flex items-center space-x-2 pl-2 pt-3 font-bold   text-md uppercase text-black">
        <div className="flex items-center space-x-2">
          <button>Daily Deals</button>
          <span className="h-4 w-px bg-black"></span>
        </div>

        <div className="flex items-center space-x-2">
          <button>Flash Sale</button>
          <span className="h-4 w-px bg-black"></span>
        </div>

        <button>View More</button>
      </div>


      {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
          {[
            {
              title: "Charger and Power Bank",
              oldPrice: 2300,
              newPrice: 2000,
              discount: "-23%",
            img: productImages[0],
          },
          { 
            title: "Charging and Data Cable",
            oldPrice: 1500,
            newPrice: 1460,
            discount: "-10%",
            img: productImages[1],
          },
          {
            title: "Minimal Phone Case",
            oldPrice: 1200,
            newPrice: 1150,
            discount: "-15%",
            img: productImages[2],
          },
          {
            title: "Cables",
            oldPrice: 3500,
            newPrice: 3450,
            discount: "-10%",
            img: productImages[3],
          },
        ].map((item, i) => (
          <div key={i} className="border-[10px] border-black  bg-black text-white  flex flex-col hover:shadow-lg">
            <div className="h-[300px]   flex items-center justify-center overflow-hidden">
              <img src={item.img} alt={item.title} className="object-contain  h-full" />
            </div>
            <p className="text-sm font-bold text-center">{item.title}</p>
            <div className="flex justify-between items-center text-xs font-medium px-1">
              <div>
                <span className="line-through text-[20px] mr-1 font-bold text-white">Rs {item.oldPrice}</span>
                <span className="text-white ">Rs {item.newPrice}</span>
              </div>
              <span className="text-black font-bold bg-yellow-500  px-2 py-3 text-[15px]">
                {item.discount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews */}
     <section className="bg-white px-4 md:px-16 py-10 space-y-4">
  <h3 className="text-center text-xl font-bold uppercase text-black">Customer Reviews</h3>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        name: "AYESHA TAHIR",
        stars: 5,
        text: "Really satisfied. I just got my order from GD Trolly and I completely love it!",
        img: "/8.jpg", // Replace with actual path
      },
      {
        name: "AHMAD RAZA",
        stars: 5,
        text: "Never unsatisfied. I will order one more as my mom needs one as well.",
        img: "/9.jpg", // Replace with actual path
      },
      {
        name: "MANZOOR BALTI",
        stars: 5,
        text: "The order was delivered today and it was nicely packed. The wire works great!",
        img: "/10.jpg", // Replace with actual path
      },
    ].map((review, i) => (
      <div
        key={i}
        className="border-[3px] p-5 border-yellow-500 flex flex-row items-start space-x-4 hover:shadow-md bg-gray-50"
      >
        {/* User Image */}
        <div className="h-32 w-32 flex-shrink-0   overflow-hidden border border-gray-300">
          <img
            src={review.img}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Review Content */}
        <div className="flex flex-col space-y-2">
            <h4 className="font-bold text-sm uppercase text-black">{review.name}</h4>
            <div className="text-yellow-400 text-sm">
              {"★".repeat(review.stars)}
              <span className="text-gray-300">
                {"★".repeat(5 - review.stars)}
              </span>
            </div>
            <p className="text-sm text-gray-700">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

 
    </div>
    <Footer/>
    </>
  );
};

export default Sale;
