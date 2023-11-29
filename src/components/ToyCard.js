import React from "react";

function ToyCard({toy, handleDelete, handleLikes}) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={(e) => handleLikes(toy)}>Like ❤️</button>
      <button className="del-btn" onClick={(e) => handleDelete(toy.id)}>Donate to Goodwill</button>
    </div>
  );
}

export default ToyCard;
