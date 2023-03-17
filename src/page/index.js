import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { buttonEditProfile, buttonAddCard, profileForm, cardForm, userName, job, initialCards, formValidationConfig } from "../components/constans.js"
import { Popup } from "../components/Popup.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";


//Экземпляры класса PopupWithForm
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');
const popupProfile = new PopupWithForm('.profile-popup', {
  handleSubmitForm: (data) => {
    userInfo.setUserInfo(data)
  }
});
popupProfile.setEventListeners();

//Открыть попап редактирования профиля
buttonEditProfile.addEventListener('click', () => {
  userName.value = userInfo.getUserInfo().username,
    job.value = userInfo.getUserInfo().job,
    popupProfile.open()
});


//Создаем экземпляр класса и вставляем карточки из масива
const cardSection = new Section({ items: initialCards, renderer: renderCard }, '.elements__list');

cardSection.renderedItems();

//Добавление новой карточки
function createCard(item) {
  const card = new Card({ data: item, handleCardClick }, '#element-template');
  const cardElement = card.generateCard();

  return cardElement
};

function renderCard(item) {
  const cardElement = createCard(item);
  cardSection.addItem(cardElement);
};

//Увеличение изображения
const popupBigImage = new Popup('.image-popup');
popupBigImage.setEventListeners();

function handleCardClick(name, link) {
  const popupImage = new PopupWithImage('.image-popup');
  popupImage.open(name, link)
};


//Экземпляр формы добавления новой карточки
const popupCard = new PopupWithForm('.card-popup', {
  handleSubmitForm: (item) => {
    const cardElement = createCard(item);
    cardSection.addNewItem(cardElement)
  }
});
popupCard.setEventListeners();

//Открыть попап добавления новых карточек
buttonAddCard.addEventListener('click', () => {
  popupCard.open()
});



//Экземпляры класса FormValidation 
const validProfileForm = new FormValidator(formValidationConfig, profileForm);
validProfileForm.enableValidation();

const validCardForm = new FormValidator(formValidationConfig, cardForm);
validCardForm.enableValidation();