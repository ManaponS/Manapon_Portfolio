import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ImageSlide(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevBtn() {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? props.slideImage.length - 1 : currentSlide - 1
    );
  }

  function nextBtn() {
    setCurrentSlide((currentSlide) =>
      currentSlide === props.slideImage.length - 1 ? 0 : currentSlide + 1
    );
  }

  return (
    <React.Fragment>
      <section className="max-w-2xl md:max-w-3xl">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%` }}
          >
            {props.slideImage}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <button onClick={prevBtn} className="hover:text-green-500">
              <FontAwesomeIcon icon="fa-solid fa-angle-left" size="xl" />
            </button>
            <button onClick={nextBtn} className="hover:text-green-500">
              <FontAwesomeIcon icon="fa-solid fa-angle-right" size="xl" />
            </button>
          </div>
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex items-center justify-center gap-2">
              {props.slideImage.map((_, i) => (
                <div
                  className={`h-3 w-3 rounded-full bg-gray-600 transition-all ${
                    currentSlide === i ? "p-2" : "bg-opacity-50"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
