// src/components/News.jsx
import React, { useEffect, useState } from "react";
import NewsList from "./NewsList";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("artificial intelligence"); // default
  const [search, setSearch] = useState("artificial intelligence");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(
            query
          )}&language=id&sortBy=publishedAt&pageSize=6&apiKey=2b478a2af3614c0dbadc744acc4c1363`
        );
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles);
        }
      } catch (error) {
        console.error("Gagal mengambil berita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* 🔍 Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center justify-center mb-6">
        <div className="flex w-full max-w-2xl shadow-xl rounded-full overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 bg-white">
          <input
            type="text"
            placeholder="🔍 Cari berita terbaru..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-6 py-4 text-gray-700 bg-transparent focus:outline-none text-base sm:text-lg"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-all text-base sm:text-lg"
          >
            Cari
          </button>
        </div>
      </form>

      {/* Loader */}
      {loading ? (
        <p className="text-center text-gray-600">Sedang memuat berita...</p>
      ) : articles.length > 0 ? (
        <NewsList articles={articles} />
      ) : (
        <p className="text-center text-red-500">Tidak ada berita ditemukan.</p>
      )}
    </div>
  );
}

export default News;
