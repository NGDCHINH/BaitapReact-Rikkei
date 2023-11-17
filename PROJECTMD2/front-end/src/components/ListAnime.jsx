// AnimeList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAnimeList } from "../Store/Admin";

const AnimeList = () => {
  const animeList = useSelector((state) => state.anime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch]);

  const handleAddToFavorites = (animeId) => {
    const storedFavorites = localStorage.getItem("favorites") || "[]";
    const favorites = JSON.parse(storedFavorites);

    const isAlreadyFavorite = favorites.some(
      (favAnime) => favAnime.id === animeId
    );

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...favorites, { id: animeId }];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      alert("Đã thêm vào danh sách yêu thích!");
    } else {
      alert("Anime đã có trong danh sách yêu thích!");
    }
  };

  return (
    <div>
      <h1 className="text-white text-5xl">Danh sách Anime hàng đầu</h1>
      {animeList && animeList.length > 0 ? (
        <div className="flex flex-wrap">
          {animeList.map((anime) => (
            <div
              key={anime.mal_id}
              className="anime-item flex-shrink-0 w-1/3 p-4 relative"
            >
              <Link to={`/anime/${anime.mal_id}`}>
                <img
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title}
                  className="w-full h-48 object-fill mb-2"
                />
                <p className="text-white">{anime.title}</p>
              </Link>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleAddToFavorites(anime.mal_id)}
                  className="bg-yellow-500 px-3 py-1 mr-2 rounded text-white"
                >
                  Yêu thích
                </button>
                <Link to={`/anime/${anime.mal_id}`} className="text-white">
                  <button className="bg-green-500 px-3 py-1 rounded text-white">
                    Xem
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Đang tải...</p>
      )}
    </div>
  );
};

export default AnimeList;
