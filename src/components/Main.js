import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  // добавление на страницу начальных карточек и информации пользователя

  React.useEffect(() => {
    api
      .getAllNeededData()
      .then(([cardsData, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__avatar-edit" onClick={onEditAvatar}>
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit" onClick={onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="profile__add" onClick={onAddPlace}></button>
      </section>

      <section className="places" aria-label="Фото">
        <ul className="places__list places__list_card">
          {cards.map((card) => (
            <Card
              card={card}
              name={card.name}
              link={card.link}
              likes={card.likes}
              key={card._id}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
