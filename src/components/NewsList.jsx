// src/components/NewsList.jsx
import React from "react";

function NewsList({ articles }) {
  if (!articles || articles.length === 0) {
    return <p style={{ textAlign: "center" }}>Tidak ada berita ditemukan.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {articles.map((article, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
          )}
          <div style={{ padding: "15px", flex: "1" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
              {article.title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              {article.description
                ? article.description.slice(0, 100) + "..."
                : "Tidak ada deskripsi."}
            </p>
          </div>
          <div style={{ padding: "15px", borderTop: "1px solid #eee" }}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Baca Selengkapnya
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
