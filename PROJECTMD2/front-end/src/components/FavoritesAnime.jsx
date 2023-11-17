import React, { useState, useEffect } from "react";
import axios from "axios";

const FavoritesAnime = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = localStorage.getItem("favorites") || "[]";
      const favorites = JSON.parse(storedFavorites);

      const promises = favorites.map(async (favAnime) => {
        try {
          const response = await axios.get(
            `https://api.jikan.moe/v4/anime/${favAnime.id}`
          );
          return response.data.data;
        } catch (error) {
          console.error("Error fetching anime details:", error);
          return null;
        }
      });
      const animeDetails = await Promise.all(promises);
      const validAnimeDetails = animeDetails.filter((anime) => anime !== null);
      setFavoriteList(validAnimeDetails);
    };
    fetchFavorites();
  }, []);
  const removeFromFavorites = (animeId) => {
    const updatedFavorites = favoriteList.filter(
      (anime) => anime.mal_id !== animeId
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteList(updatedFavorites);
  };

  return (
    <div>
      <h1 className="text-white text-5xl">Danh sách Anime yêu thích</h1>
      {favoriteList && favoriteList.length > 0 ? (
        <div className="flex flex-wrap">
          {favoriteList.map((anime) => (
            <div
              key={anime.mal_id}
              className="anime-item flex-shrink-0 w-1/3 p-4 relative"
            >
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-48 object-fill mb-2"
              />
              <p className="text-white">{anime.title}</p>
              {/* Remove button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={() => removeFromFavorites(anime.mal_id)}
                  className="bg-red-500 px-3 py-1 rounded text-white"
                >
                  Bỏ yêu thích
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Không có anime nào trong danh sách yêu thích.</p>
      )}
    </div>
  );
};

export default FavoritesAnime;
