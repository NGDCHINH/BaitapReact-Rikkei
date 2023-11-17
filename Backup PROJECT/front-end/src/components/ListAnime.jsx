// AnimeList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("Naruto");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
      );
      setAnimeList(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div>
      <h1 className="text-white text-5xl">Danh sách Anime hàng đầu</h1>
      {animeList && animeList.length > 0 ? (
        <div className="flex flex-wrap">
          {animeList.map((anime) => (
            <div
              key={anime.mal_id}
              className="anime-item flex-shrink-0 w-1/3 p-4"
            >
              <Link to={`/anime/${anime.mal_id}`}>
                <img
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title}
                  className="w-full h-48 object-cover mb-2"
                />
                <p className="text-white">{anime.title}</p>
              </Link>
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
