import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetchData from "../hooks/useFetchData";

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);
  const { data: popularData } = useFetchData("/movie/popular");
  const { data: topRatedData } = useFetchData("/movie/top_rated");
  const { data: tvListData } = useFetchData("/tv/popular");
  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingData}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScrollCard
        data={popularData}
        heading={"Popular"}
        star={true}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={topRatedData}
        heading={"Top Rated"}
        star={true}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={tvListData}
        heading={"TV List"}
        star={true}
        media_type="tv"
      />
    </div>
  );
};

export default Home;
