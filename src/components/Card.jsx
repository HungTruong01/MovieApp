import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Card = ({ data, trending, index, star, media_type }) => {
  const imageUrl = useSelector((state) => state.movieData.imageUrl);
  const mediaType = data.media_type ?? media_type;
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[230px] max-w-[230px] block h-96 rounded relative hover:scale-105 scroll-smooth transition-all"
    >
      <img
        src={imageUrl + data?.poster_path}
        alt=""
        className="overflow-hidden"
      />
      <div className="absolute top-3">
        {trending && (
          <div className="px-4 py-1 backdrop-blur-3xl rounded-r-full bg-primary/70 text-white">
            #{index} Trending
          </div>
        )}
        {star && (
          <div className="absolute top-3">
            <div className="flex items-center justify-center gap-1 rounded-full text-white bg-primary w-13 h-8 p-3 ml-3">
              <p>{Number(data.vote_average).toFixed(1)} </p>
              <span>
                <FaStar />
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="absolute -bottom-5 h-12 w-full p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold text-white text-center">
          {data?.title || data?.name}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
