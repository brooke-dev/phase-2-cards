import React, { useState } from "react";

function NewCardForm({handleAddCard}) {
  const [cardName, setCardName] = useState("")
  const [cardImage, setCardImage] = useState("")
  const [cardComment, setCardComment] = useState("")
  
  console.log({ cardName, cardImage, cardComment })

  function handleSubmit(e) {
    e.preventDefault()
    handleAddCard(e)
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
        <input type="text" name="comment" placeholder="Comment" value={cardComment}
        onChange={(e) => setCardComment(e.target.value)}
        />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default NewCardForm;