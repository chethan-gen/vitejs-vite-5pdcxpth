import React from "react";
import "./BookCard.css"; // Import the stylesheet

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <div className="book-info">
        <h2>{name}</h2>
        <h4>Genre: {genre}</h4>
        <h4>Author: {author}</h4>
      </div>
    </div>
  );
};

export default BookCard;
