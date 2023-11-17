import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addAnimeToServer } from "../Store/Admin";
import { useDispatch } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import Logo from "../img/tobirama0.png";

const Admin = () => {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("Naruto");
  const [page, setPage] = useState(1);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredAnime, setHoveredAnime] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("Naruto");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=20&page=${page}`
      );
      setAnimeList(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [search, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleAddAnimeToList = (anime) => {
    dispatch(addAnimeToServer(anime));
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearch(searchInput);
    setPage(1);
    getData();
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoggedIn(true);
    }
  }, []);

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      setLoggedIn(false);
      setUser(null);
      localStorage.removeItem("user");
    }
  };

  const handleAvatarClick = () => {
    if (isLoggedIn) {
      handleLoginClick();
      navigate("/");
    }
  };

  const handleMouseEnter = (anime) => {
    setHoveredAnime(anime);
  };

  const handleMouseLeave = () => {
    setHoveredAnime(null);
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between bg-slate-700 px-5">
          <div className="flex items-center">
            <img className="w-32 h-32" src={Logo} alt="Logo" />
            <span className="text-lg decoration-solid text-white">
              WibuWatch
            </span>
          </div>
          <div>
            {isLoggedIn ? (
              <div className="flex gap-4 items-center">
                <span className="text-white">{user && user.name}</span>
                <img
                  src={user && user.avt}
                  className="w-16 h-16 rounded-full cursor-pointer"
                  onClick={handleAvatarClick}
                />
              </div>
            ) : (
              <Link to="/">
                <button
                  className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                  onClick={handleLoginClick}
                >
                  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#1d3042] max-w-full max-h-full">
        <h2 className="text-center text-8xl text-white">Quản lý Anime</h2>
        <form onSubmit={handleSearchSubmit}>
          <div className="flex items-center justify-center p-5">
            <div className="rounded-lg bg-gray-200 p-5">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  placeholder="Search for anime..."
                  className="w-[400px] max-h-[160px] bg-white pl-2 text-base font-semibold outline-0"
                />
                <button
                  type="submit"
                  className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-wrap">
          {animeList.map((anime) => (
            <div
              key={anime.mal_id}
              className="anime-item flex-shrink-0 w-1/4 p-4 relative"
              onMouseEnter={() => handleMouseEnter(anime)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-white">
                {anime.title}
                <img
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title}
                  className="w-full h-48 object-fill mb-2"
                />
                {hoveredAnime === anime && (
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
                    onClick={() => handleAddAnimeToList(anime)}
                  >
                    Add Anime
                  </button>
                )}
              </span>
            </div>
          ))}
        </div>
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
};

export default Admin;
