import React, { useState } from "react";

function NewPokemonCardForm({handleAddCard}) {
  const [cardName, setCardName] = useState("")
  const [cardImage, setCardImage] = useState("")
  const [cardComment, setCardComment] = useState("")
  const [pokeNumber, setPokeNumber] = useState("")
  const [cardType, setCardType] = useState("")
  const [cardRarity, setCardRarity] = useState("")
  
   console.log({ cardRarity, cardImage, cardComment })

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:4000/Pokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
        body: JSON.stringify({
            name: cardName,
            image: cardImage,
            comment: cardComment,
            ["pokedex-number"]: pokeNumber,
            ["pokemon-type"]: cardType,
            ["card-rarity"]: cardRarity,

        })
  })
  .then(r => r.json())
  .then((newPokemonCard) => handleAddCard(newPokemonCard))
}
  return (
    <div className="new-card-form">
      <h2>New Card</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Card name" value={cardName} 
        onChange={(e) => setCardName(e.target.value)}
        />
        <input type="text" name="image" placeholder="Image URL" value={cardImage} 
        onChange={(e) => setCardImage(e.target.value)}
        />
        <input type="text" name="pokedex-no" placeholder="Pokedex number(000)" value={pokeNumber}
        onChange={(e) => setPokeNumber(e.target.value)}
        />
        <input type="text" name="pokemon-type" placeholder="Pokemon type" value={cardType}
        onChange={(e) => setCardType(e.target.value)}
        />
        <input type="text" name="card-rarity" placeholder="Card rarity" value={cardRarity}
        onChange={(e) => setCardRarity(e.target.value)}
        />
        <input type="text" name="comment" placeholder="Comment" value={cardComment}
        onChange={(e) => setCardComment(e.target.value)}
        />

        <button type="submit" className="submitButton">Add Card</button>
      </form>
    </div>
  );
}

export default NewPokemonCardForm;