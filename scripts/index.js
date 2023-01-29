const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__info-edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');

let username = document.querySelector('.popup__form-input_field_name');
let job = document.querySelector('.popup__form-input_field_job');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');

function openPopup() {
    popup.classList.add('popup_opened');
    username.value = profileTitle.textContent;
    job.value = profileSubtitle.textContent;
}

function closePopup(){
    popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();    // Эта строчка отменяет стандартную отправку формы.
    profileTitle.textContent = username.value;
    profileSubtitle.textContent = job.value;
    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка» 
formElement.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);


//Попап №2 - добавление новой карточки
const addButton = profile.querySelector('.profile__add-button');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoClose = document.querySelector('.popup-photo__close');
const formPopupPhoto = popupPhoto.querySelector('.popup-photo__form');

let cardName = popupPhoto.querySelector('.popup-photo__form-input_card_name');
let link = popupPhoto.querySelector('.popup-photo__form-input_card_link');

function openPopupPhoto() {
  popupPhoto.classList.add('popup-photo_opened');
  formPopupPhoto.reset();
}

function closePopupPhoto(){
  popupPhoto.classList.remove('popup-photo_opened');
}

addButton.addEventListener('click', openPopupPhoto);
popupPhotoClose.addEventListener('click', closePopupPhoto);



//Попап №3 - Открытие(увеличение) картинки
const popupImage = document.querySelector('.popup-image');
const popupImageClose = document.querySelector('.popup-image__close');
const imageButton = document.querySelector('.element__button-image');

let popupImagePhoto = document.querySelector('.popup-image__photo');
let popupImageTitle = document.querySelector('.popup-image__title');

function openPopupImage () {
  popupImage.classList.add('popup-image_opened');
};

function closePopupImage() {
  popupImage.classList.remove('popup-image_opened');
};

popupImageClose.addEventListener('click', closePopupImage);


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

  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__image').alt = element.alt;

  //Лайк
  const likeButton = cardElement.querySelectorAll('.element__like');
  likeButton.forEach(like => {
    like.addEventListener('click', (event) => {
      event.target.classList.toggle('element__like_active');
    });
  });
 
  //Удаление карточек
  const delButton = cardElement.querySelectorAll('.element__del');
  delButton.forEach(del => {
    del.addEventListener('click', (event) => {
      event.target.closest('.element').remove();
    });
  });

  //Увеличение карточек
  cardElement.querySelector('.element__image').addEventListener('click', () => {
    openPopupImage(popupImage);
    popupImagePhoto.src = element.link;
    popupImagePhoto.alt = element.alt;
    popupImageTitle.textContent = element.name;
  });
 
  return cardElement;
};
  

//Добавление карточки
const renderCard = (element) => {
  cardList.append(createCard(element));
};

//Добавление 6 карточек из массива
initialCards.forEach((item) => {
  renderCard(item);
});

//Сохранение новых карточек
function AddFormSubmit (evt) {
  evt.preventDefault();
  const newCard = {name: cardName.value, link: link.value, alt: link.value};
  cardList.prepend(createCard(newCard));
  closePopupPhoto();
};

formPopupPhoto.addEventListener('submit', AddFormSubmit);