import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/News";
import Footer from "../components/Footer";

function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Ambil berita dari NewsAPI
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=artificial%20intelligence&language=id&sortBy=publishedAt&pageSize=20&apiKey=2b478a2af3614c0dbadc744acc4c1363`
        );
        const data = await res.json();

        if (data.articles) {
          setArticles(data.articles);
          setFilteredArticles(data.articles);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // 🔹 Fungsi search
  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) =>
        article.title?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar tetap di atas */}
      <Navbar />

      {/* Konten utama */}
      <div className="flex-grow">
        <Header />
        <SearchBar onSearch={handleSearch} />

        {loading ? (
          <p className="text-center p-10 text-lg">⏳ Loading berita...</p>
        ) : filteredArticles.length > 0 ? (
          <NewsList articles={filteredArticles} />
        ) : (
          <p className="text-center p-10 text-red-500 text-lg">
            ❌ Tidak ada berita ditemukan
          </p>
        )}
      </div>

      {/* Footer di bawah */}
      <Footer />
    </div>
  );
}

export default Home;
