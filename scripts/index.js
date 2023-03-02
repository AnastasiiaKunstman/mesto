//Открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};


//Закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

//Закрыть по Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
};

//Закрытие по оверлей + крестик
const closePopups = document.querySelectorAll('.popup');
closePopups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')||evt.target.classList.contains ('popup__close')){
      closePopup(popup)
    };
  });
});





//Попап редактирования профиля
const profileForm = document.forms['edit profile'];
const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const profilePopup = document.querySelector('.profile-popup');
const userName = document.querySelector('.profile-popup__form-input_field_name');
const job = document.querySelector('.profile-popup__form-input_field_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//Открыть попап редактирования профиля
buttonEditProfile.addEventListener('click', () => {
  openPopup(profilePopup);
  userName.value = profileTitle.textContent;
  job.value = profileSubtitle.textContent;
});

// Функция «отправки» формы
function handleProfileFormSubmit (evt) {
    evt.preventDefault();    // Эта строчка отменяет стандартную отправку формы.
    profileTitle.textContent = userName.value;
    profileSubtitle.textContent = job.value;
    closePopup(profilePopup);
};

profilePopup.addEventListener('submit', handleProfileFormSubmit);




//Попап добавления новой карточки
const buttonAddCard = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.card-popup');

//Открыть попап добавления новой карточки
buttonAddCard.addEventListener('click', () => {
  openPopup(cardPopup);
});



//Карточки
import Card from "./Card.js";

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Архыз'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt: 'Челябинская область'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Иваново'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt: 'Камчатка'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Холмогорский район'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      alt: 'Байкал'
    }
  ];


function createCard(item) {
  const card = new Card(item, '#element-template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement
};

//Вставка карточек из массива на страницу
const cardList = document.querySelector('.elements__list');

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  cardList.append(cardElement);
});

//Добавление новой карточки
const cardForm = document.forms['add photo'];
const cardName = document.querySelector('.card-popup__form-input_card_name');
const cardLink = document.querySelector('.card-popup__form-input_card_link');

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  cardList.prepend(createCard({name: cardName.value, link: cardLink.value, alt: cardLink.value}));
  evt.target.reset();
  closePopup(cardPopup);
};

cardForm.addEventListener('submit', handleAddFormSubmit);

//Увеличение карточек
const popupImage = document.querySelector('.image-popup');
const imagePopupPhoto = document.querySelector('.image-popup__photo');
const imagePopupTitle = document.querySelector('.image-popup__title');

function handleCardClick (elementPhoto, elementTitle) {
  openPopup(popupImage);
  imagePopupPhoto.src = elementPhoto;
  imagePopupPhoto.alt = elementPhoto;
  imagePopupTitle.textContent = elementTitle;
};



//Валидация
import  FormValidator  from "./FormValidator.js";

const formValidationConfig = {
  formSelector:'.popup__form',
  inputSelector:'.popup__input',
  submitButtonSelector:'.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-visible'
};


//Экземпляры класса FormValidation
const validProfileForm = new FormValidator(formValidationConfig, profileForm);
validProfileForm.enableValidation();

const validCardForm = new FormValidator(formValidationConfig, cardForm);
validCardForm.enableValidation();