import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, handleLikes}) {
  return (
    <div id="toy-collection">{toys.map(toy => <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete} handleLikes={handleLikes}/>)}</div>
  );
}

export default ToyContainer;
