import React, { useRef } from "react";
import Card from "../components/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HorizontalScrollCard = ({
  data = [],
  heading,
  trending,
  star,
  media_type,
}) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300;
  };
  return (
    <div className="container mx-auto px-8 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-4 text-white">
        {heading}
      </h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex justify-between items-center h-[420px] w-full gap-10 overflow-x-scroll overflow-hidden relative z-10 scroll-smooth transition duration-150 scrollbar-none"
        >
          {data.map((data, index) => {
            return (
              <Card
                key={data.id + "heading" + index}
                data={data}
                index={index + 1}
                trending={trending}
                star={star}
                media_type={media_type}
              />
            );
          })}
        </div>

        <div className="absolute top-0 w-full h-full hidden lg:flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className="bg-white p-1 text-black rounded-full -ml-2 z-10"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-1 text-black rounded-full -mr-2 z-10"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
