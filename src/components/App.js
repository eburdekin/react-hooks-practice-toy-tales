import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const toyAPI = 'http://localhost:3001/toys'

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const [toys, setToys] = useState([])

  useEffect(()=>{
    fetch(toyAPI)
    .then(r => r.json())
    .then(setToys)
  },[])

  function handleAddToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleDelete(id) {
    fetch(`${toyAPI}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    setToys(toys.filter(toy => id !== toy.id))
  }

  function handleLikes(likedToy) {

    const newLikes = likedToy.likes +1
    const updatedLikes = {likes: newLikes}

    fetch(`${toyAPI}/${likedToy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedLikes)
    })
    .then(r => r.json())
    .then(
    setToys(toys.map(toy => {
      if (toy.id === likedToy.id) {
        return {...toy, likes: newLikes }
      }
      else {return toy}
    }))
    )
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete} handleLikes={handleLikes}/>
    </>
  );
}

export default App;
