import React, { useState } from "react";

function NewYugiohCardForm({handleAddCard}) {
  const [cardName, setCardName] = useState("")
  const [cardImage, setCardImage] = useState("")
  const [cardComment, setCardComment] = useState("")
  const [cardType, setCardType] = useState("")
  const [cardRarity, setCardRarity] = useState("")
  
   console.log({ cardRarity, cardImage, cardComment })

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:4000/Yu-Gi-Oh!", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
        body: JSON.stringify({
            name: cardName,
            image: cardImage,
            comment: cardComment,
            ["card-type"]: cardType,
            ["card-rarity"]: cardRarity,
        })
  })
  .then(r => r.json())
  .then((newYugiohCard) => handleAddCard(newYugiohCard))
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
        <input type="text" name="card-type" placeholder="Card type" value={cardType} 
        onChange={(e) => setCardType(e.target.value)}
        />
        <input type="text" name="card-rarity" placeholder="Card rarity" value={cardRarity}
        onChange={(e) => setCardRarity(e.target.value)}
        />
        <input type="text" name="comment" placeholder="Comment" value={cardComment}
        onChange={(e) => setCardComment(e.target.value)}
        />
        
        <button type="submit">Add Card</button>
        {/* <button className="btn2" type="submit">Add Card</button> */}
      
      </form>
    </div>
  );
}

export default NewYugiohCardForm;