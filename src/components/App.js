import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = React.useState({});

  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        text="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__block">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="popup__input popup__input_profile_name"
            id="name-input"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-input-error"></span>
        </div>
        <div className="popup__block">
          <input
            type="text"
            name="about"
            placeholder="О себе"
            className="popup__input popup__input_profile_job"
            id="about-input"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error about-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        text="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__block">
          <input
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            className="popup__input"
            id="avatar-input"
            required
          />
          <span className="popup__input-error avatar-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?" text="Да"></PopupWithForm>

      <PopupWithForm
        name="place"
        title="Новое место"
        text="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__block">
          <input
            type="text"
            name="name"
            placeholder="Название"
            className="popup__input popup__input_place_name"
            id="place-name-input"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error place-name-input-error"></span>
        </div>
        <div className="popup__block">
          <input
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_place_link"
            id="link-input"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </div>
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
