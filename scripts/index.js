const profileForm = document.forms['profile-popup__form'];
const editButton = document.querySelector('.profile__info-edit-button');
const profilePopup = document.querySelector('.profile-popup');
const userName = document.querySelector('.profile-popup__form-input_field_name');
const job = document.querySelector('.profile-popup__form-input_field_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//Закрыть по Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
};

//Закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

//Открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
};

//Закрытие по оверлей + крестик
const closeByOverlay = document.querySelectorAll('.popup');
closeByOverlay.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')){
      closePopup(popup)
    };
    if (evt.target.classList.contains('popup__close')){
      closePopup(popup)
    };
  });
});

//Открыть попап редактирования профиля
editButton.addEventListener('click', () => {
  openPopup(profilePopup);
  userName.value = profileTitle.textContent;
  job.value = profileSubtitle.textContent;
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit (evt) {
    evt.preventDefault();    // Эта строчка отменяет стандартную отправку формы.
    profileTitle.textContent = userName.value;
    profileSubtitle.textContent = job.value;
    closePopup(profilePopup);
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка» 
profilePopup.addEventListener('submit', handleProfileFormSubmit);

//Попап №2 - добавление новой карточки
const addButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.card-popup');
const cardForm = document.querySelector('.card-popup__form');
const cardName = document.querySelector('.card-popup__form-input_card_name');
const cardLink = document.querySelector('.card-popup__form-input_card_link');


//Открыть попап добавления новой карточки
addButton.addEventListener('click', () => {
  openPopup(cardPopup);
});

//Попап №3 - Открытие(увеличение) картинки
const popupImage = document.querySelector('.image-popup');
const imageButton = document.querySelector('.element__button-image');
const imagePopupPhoto = document.querySelector('.image-popup__photo');
const imagePopupTitle = document.querySelector('.image-popup__title');


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


const cardList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#element-template').content;

const createCard = (element) => {
  const cardElement = cardTemplate.cloneNode(true);

  const elementTitle = cardElement.querySelector('.element__title');
  elementTitle.textContent = element.name;

  const elementImage = cardElement.querySelector('.element__image');
  elementImage.src = element.link;
  elementImage.alt = element.alt;

  //Лайк
  const likeButton = cardElement.querySelector('.element__like');
  likeButton.addEventListener('click', (event) => {
      event.target.classList.toggle('element__like_active');
    });
 
  //Удаление карточек
  const delButton = cardElement.querySelector('.element__del');
  delButton.addEventListener('click', (event) => {
      event.target.closest('.element').remove();
    });

  //Увеличение карточек
  elementImage.addEventListener('click', () => {
    openPopup(popupImage);
    imagePopupPhoto.src = element.link;
    imagePopupPhoto.alt = element.alt;
    imagePopupTitle.textContent = element.name;
  });
 
  return cardElement;
};
  

//Добавление карточки
const renderCard = (element) => {
  cardList.append(createCard(element));
};

//Добавление 6 карточек из массива
initialCards.forEach(renderCard);
 

//Сохранение новых карточек
function handleAddFormSubmit (evt) {
  evt.preventDefault();
  const newCard = {name: cardName.value, link: cardLink.value, alt: cardLink.value};
  cardList.prepend(createCard(newCard));
  evt.target.reset();
  closePopup(cardPopup);
};

cardForm.addEventListener('submit', handleAddFormSubmit);