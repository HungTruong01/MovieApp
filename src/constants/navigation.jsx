import { LuTvMinimalPlay } from "react-icons/lu";
import { BiSolidMoviePlay } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";

export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <LuTvMinimalPlay />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidMoviePlay />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <GoHomeFill />,
  },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <IoMdSearch />,
  },
];
