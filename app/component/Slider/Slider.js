// components/Slider.js
"use client";
import { useState } from "react";
import { SLIDER } from "@/app/data/data";
import styles from "../../styles/slider.module.css"; // Import the Tailwind CSS module

const Slider = () => {
  return <Sliderhub slides={SLIDER} />;
};

const Sliderhub = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === slides.length - 1) {
        // If on the last slide, go to the first slide
        return 0;
      } else {
        // Otherwise, go to the next slide
        return prevSlide + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-300 transform translate-x-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
        <div key={slides.length} className="w-full flex-shrink-0">
          <img src={slides[0]} alt={`Slide 1`} className="w-full h-auto" />
        </div>
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white bg-gray-800 px-4 py-2 rounded-l focus:outline-none"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 text-white bg-gray-800 px-4 py-2 rounded-r focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
