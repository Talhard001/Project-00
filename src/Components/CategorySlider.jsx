import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const categories = [
  { id: 1, image: "/34.jpg", alt: "Watch Category 1" },
  { id: 2, image: "/35.jpg", alt: "Camera Category" },
  { id: 3, image: "/36.jpg", alt: "Watch Category 2" },
  { id: 4, image: "/37.jpg", alt: "Watch Category 3" },
  { id: 5, image: "/38.jpg", alt: "Watch Category 4" },
  { id: 6, image: "/39.jpg", alt: "Watch Category 5" },
];

export default function LoopingCategorySlider() {
  const [visibleIndexes, setVisibleIndexes] = useState(new Set());

  const updateVisibleSlides = (slider) => {
    const slides = slider.track.details.slides;
    const visible = slides
      .filter((s) => s.portion > 0)
      .map((s) => s.abs % categories.length);
    setVisibleIndexes(new Set(visible));
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 5,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slideChanged(slider) {
      updateVisibleSlides(slider);
    },
    created(slider) {
      updateVisibleSlides(slider);
    },
  });

  return (
    <div className="relative px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Shop by Categories</h2>

      {/* Left Arrow */}
      <div className="absolute left-2 top-1/2 z-10 -translate-y-1/2">
        <button onClick={() => instanceRef.current?.prev()}>
          <img src="/left-arrow.png" alt="left" className="w-10 h-10 sm:w-12 sm:h-12" />
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2">
        <button onClick={() => instanceRef.current?.next()} className="bg-transparent">
          <img src="/right.jpg" alt="right" className="w-12 h-16 sm:w-16 sm:h-20" />
        </button>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {categories.map((item, index) => (
          <div
            key={item.id}
            className="keen-slider__slide flex justify-center items-center"
          >
            <div
              className={`
                w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%]
                h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]
                overflow-hidden shadow-md border-4 transition-all duration-300
                ${visibleIndexes.has(index) ? "border-yellow-400" : "border-transparent"}
              `}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
