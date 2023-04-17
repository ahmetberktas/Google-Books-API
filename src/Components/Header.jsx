import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import "./Header.css";

function Header() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const searchBook = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyAoQ4m9G2HPF9YGweWn265puE0z6QCyZW4" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <header className="header-container">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="header-title">Books App</h1>
          <form>
            <input
              className="header-input"
              type="text"
              placeholder="Search for books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button className="header-button" type="submit" onClick={searchBook}>
              Search
            </button>
          </form>
        </div>
      </header>
      <div className="card-container">{<Card book={data}></Card>}</div>
    </>
  );
}

export default Header;
