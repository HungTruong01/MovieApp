import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageUrl = useSelector((state) => state.movieData.imageUrl);
  const [currentImage, setCurrentImage] = useState(0);
  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerData, imageUrl]);

  return (
    <section className="w-full h-full z-10">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              key={data.id + "bannerHome" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageUrl + data.backdrop_path}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex">
                <button
                  onClick={handlePrevious}
                  className="bg-white text-black p-2 rounded-full text-xl z-10"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white text-black p-2 rounded-full text-xl z-10"
                >
                  <IoIosArrowForward />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto">
                <div className="w-full absolute bottom-0 max-w-md px-4 lg:ml-8 ml-2">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                    {data.title || data.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <p>Rating : {Number(data.vote_average).toFixed(1)} </p>
                      <span>
                        <FaStar color="yellow" />
                      </span>
                    </div>
                    <span>|</span>
                    <p>View : {Number(data.popularity).toFixed(0)} </p>
                  </div>
                  <button
                    className="bg-primary px-4 py-2 text-white font-bold rounded mt-4
                     bg-gradient-to-l from-blue-800 to-blue-400 shadow-md transition-all hover:scale-105"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
