const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonEditAvatar = document.querySelector('.profile__edit-avatar-button');
const profileForm = document.forms['edit profile'];
const cardForm = document.forms['add photo'];
const avatarForm = document.forms['new avatar'];
const userName = document.querySelector('.profile-popup__form-input_field_name');
const job = document.querySelector('.profile-popup__form-input_field_job');
const nameUser = document.querySelector('.profile__title');
const jobUser = document.querySelector('.profile__subtitle');
const userAvatar = document.querySelector('.profile__avatar');

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

const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-visible'
};

export { buttonEditProfile, buttonAddCard, buttonEditAvatar, profileForm, cardForm, avatarForm, userName, job, nameUser, jobUser, userAvatar, formValidationConfig }