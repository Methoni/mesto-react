import React from 'react';

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="place place__element">
      <img
        src={card.link}
        alt={card.name}
        className="place__image place__image_card"
        onClick={handleClick}
      />
      <button
        type="button"
        className="place__trash place__trash_button"
      ></button>
      <div className="place__line">
        <h2 className="place__title place__title_card place__title_card">
          {card.name}
        </h2>
        <div className="place__like-container">
          <button
            type="button"
            className="place__heart place__like-icon"
          ></button>
          <span className="place__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
export default Card;
