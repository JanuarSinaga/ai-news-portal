// src/components/SearchBar.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ query, setQuery, handleSearch }) {
  return (
    <div className="flex justify-center my-6">
      <div className="flex items-center w-full max-w-lg bg-white shadow-md rounded-full overflow-hidden">
        {/* Input */}
        <div className="flex items-center px-4 w-full">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari berita..."
            className="w-full py-2 focus:outline-none text-gray-700"
          />
        </div>

        {/* Tombol Cari */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200"
        >
          Cari
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
