// src/App.jsx
import React from "react";
import "./styles/App.css";
import News from "./components/News";

function App() {
  // fungsi untuk scroll ke section tertentu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">AI News Portal</h1>
        <ul className="nav-links">
          <li>
            <button
              type="button"
              aria-label="Pergi ke Beranda"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Lihat berita terbaru"
              onClick={() => scrollToSection("news")}
            >
              Berita
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Tentang kami"
              onClick={() => scrollToSection("about")}
            >
              Tentang
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Kontak kami"
              onClick={() => scrollToSection("contact")}
            >
              Kontak
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero">
        <h2>Selamat Datang di Portal Berita AI</h2>
        <p>
          Temukan berita terbaru tentang Artificial Intelligence, teknologi, dan
          inovasi masa depan.
        </p>
        <button
          type="button"
          className="cta-btn"
          aria-label="Baca berita terbaru"
          onClick={() => scrollToSection("news")}
        >
          Baca Berita
        </button>
      </header>

      {/* Section Berita */}
      <section id="news" className="news-section">
        <h2>Berita Terbaru</h2>
        <News /> {/* berita otomatis dari API */}
      </section>

      {/* Section Tentang */}
      <section id="about" className="about-section">
        <h2>Tentang Kami</h2>
        <p>
          AI News Portal adalah platform berita yang menghadirkan informasi
          terbaru seputar Artificial Intelligence, teknologi, dan inovasi masa
          depan.
        </p>
      </section>

      {/* Section Kontak */}
      <section id="contact" className="contact-section">
        <h2>Kontak</h2>
        <p>
          <strong>Email:</strong> sinagajanuar65@gmail.com
        </p>
        <p>
          <strong>Telp:</strong> +62 856-6887-7270
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 AI News Portal | Dibuat oleh Januar</p>
      </footer>
    </div>
  );
}

export default App;
