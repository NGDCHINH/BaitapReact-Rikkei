// AnimeDetail.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AnimeDetail = () => {
  const { id } = useParams();
  const [animeDetail, setAnimeDetail] = useState(null);
  const [showMore, setShowMore] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const animeResponse = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}`
        );
        setAnimeDetail(animeResponse.data.data);
      } catch (error) {
        setError("Có lỗi khi lấy dữ liệu.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {loading && <p>Đang tải...</p>}
      {error && <p>{error}</p>}
      {animeDetail && (
        <div>
          <h1 className="text-white text-5xl">{animeDetail.title}</h1>

          {/* Anime Details */}
          <div className="details">
            <div className="detail">
              <div className="image">
                <img src={animeDetail.images?.jpg.large_image_url} alt="" />
              </div>
            </div>
            <p className="description text-white">
              {showMore
                ? animeDetail.synopsis
                : animeDetail.synopsis?.substring(0, 450) + "..."}
              <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Read More"}
              </button>
            </p>
          </div>

          <h3 className="title text-2xl text-center text-white">Trailer</h3>
          <div className="trailer-con flex justify-center">
            {animeDetail.trailer?.embed_url ? (
              <iframe
                src={animeDetail.trailer.embed_url}
                title="Inline Frame Example"
                width="800"
                height="450"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <h3 className="text-white">Không có trailer</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetail;
