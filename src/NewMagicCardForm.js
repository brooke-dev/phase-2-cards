import React, { useState } from "react";

function NewMagicCardForm({handleAddCard}) {
  const [cardName, setCardName] = useState("")
  const [cardImage, setCardImage] = useState("")
  const [cardComment, setCardComment] = useState("")
  const [magicNumber, setMagicNumber] = useState("")
  const [typeLine, setTypeLine] = useState("")
  const [expansionSymbol, setExpansionSymbol] = useState("")

  // console.log({ cardName, cardImage, cardComment })

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:4000/Magic-the-Gathering", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
        body: JSON.stringify({
            name: cardName,
            image: cardImage,
            comment: cardComment,
            ["collector-number"]: magicNumber,
            ["type-line"]: typeLine,
            ["expansion-symbol"]: expansionSymbol,

        })
  })
  .then(r => r.json())
  .then((newMagicCard) => handleAddCard(newMagicCard))
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
        <input type="text" name="collector-number" placeholder="Collector number" value={magicNumber} 
        onChange={(e) => setMagicNumber(e.target.value)}
        />
        <input type="text" name="type-line" placeholder="Type line" value={typeLine} 
        onChange={(e) => setTypeLine(e.target.value)}
        />
        <input type="text" name="expansion-symbol" placeholder="Expansion symbol" value={expansionSymbol}
        onChange={(e) => setExpansionSymbol(e.target.value)}
        />
         <input type="text" name="comment" placeholder="Comment" value={cardComment}
        onChange={(e) => setCardComment(e.target.value)}
        />
        <button type="submit" className="submitButton">Add Card</button>
        {/* <button className="btn2" type="submit">Add Card</button> */}
      
      </form>
    </div>
  );
}

export default NewMagicCardForm;