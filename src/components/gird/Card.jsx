// import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card_container">
      <div className="card_details">
        <img src={card.imageUrl} alt={"carte de " + card.name} />
        <button>Acheter</button>
      <button>Vendre</button>
      </div>
      <div className="card_description">
        <h2>{card.name} </h2>
        <h4>Rareté : {card.rarity}</h4>
        <h4>Coût en mana: {card.manaCost} </h4>
        <h4>Type : {card.type} </h4>
        <h4>Descrption : {card.text} </h4>
        <h4>Numéro : {card.number} </h4>
        <h4>Artiste: {card.artist} </h4>
        <h4></h4>
        <h4></h4>
        <h4></h4>
      </div>
    </div>
  );
};

export default Card;
