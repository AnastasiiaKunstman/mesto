import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { buttonEditProfile, buttonAddCard, buttonEditAvatar, profileForm, cardForm, avatarForm, userName, job, nameUser, jobUser, userAvatar, formValidationConfig } from "../utils/constans.js"
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";
import { Api } from "../components/Api.js";

let myId = '';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: '66f0fc0f-5294-4ede-9d73-f86f3fdca69e',
    'content-type': 'application/json'
  },
});

//Экземпляр класса UserInfo
const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');


//Загрузка информации с сервера
Promise.all([
  api.getUserInfo()
    .then((data) => {
      nameUser.textContent = data.name;
      jobUser.textContent = data.about;
      userAvatar.src = data.avatar;
      myId = data._id;
      return myId
    })
    .catch((err) => alert(err)),
  api.getInitialCards()
    .then((data) => {
      const cardSection = new Section({
        items: data,
        renderer: (data) => {
          cardSection.addItem(createCard(data))
        }
      }, '.elements__list')

      cardSection.renderedItems(data);
    })
    .catch((err) => alert(err))
]);


//Экземпляр формы редактирования профиля
const popupProfile = new PopupWithForm('.profile-popup', {
  handleSubmitForm: (data) => {
    popupProfile.renderLoading(true);
    api.changeUserInfo(data)
      .then((data) => {
        nameUser.textContent = data.name;
        jobUser.textContent = data.about;
      })
      .catch((err) => alert(err))
      .finally(() => {popupProfile.renderLoading(false)})
  }
});
popupProfile.setEventListeners();


buttonEditProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  userName.value = userData.username;
  job.value = userData.job;
  popupProfile.open()
});


//Попап удаления
const cardInfoSubmit = new PopupWithSubmit('.delete-popup');
cardInfoSubmit.setEventListeners();

//новая карточка
function createCard(item) {
  const card = new Card(item, myId, {
    handleCardClick: (name, link) => {
      popupImage.open(name, link)
    },
    handleLikeIconClick: () => {
      if (card.isLiked()) {
        api.removeLike(card.getId())
          .then((res) => {
            card.setLikeCounter(res.likes);
          })
          .catch(err => console.log(`Ошибка изменения статуса лайка: ${err}`))
      } else {
        api.addLike(card.getId())
          .then((res) => {
            card.setLikeCounter(res.likes);
          })
          .catch(err => console.log(`Ошибка изменения статуса лайка: ${err}`));
      }
    },
    handleDeleteIconClick: () => {
      cardInfoSubmit.open();
      cardInfoSubmit.setSumbitAction(() => {
        api.deleteCard(card.getId())
          .then(() => {
            card.deleteCard();
            cardInfoSubmit.close();
          })
          .catch(err => console.log(`Ошибка при удалении карточки: ${err}`))
      });
    }
  }, '#element-template');

  return card.generateCard();
};



//Экземпляр формы добавления новой карточки
const popupCard = new PopupWithForm('.card-popup', {
  handleSubmitForm: (data) => {
    popupCard.renderLoading(true);
    api.addNewCard(data)
      .then((data) => {
        const cardSection = new Section({
          items: data,
          renderer: (data) => {
            cardSection.addItem(createCard(data))
          }
        }, '.elements__list')
        cardSection.addNewItem(createCard(data));
      })
      .catch((err) => alert(err))
      .finally(() => {popupCard.renderLoading(false)})
  }
});
popupCard.setEventListeners();

//Открыть попап добавления новых карточек
buttonAddCard.addEventListener('click', () => {
  popupCard.open()
});


//Экземпляр формы редактирования аватара
const popupEditAvatar = new PopupWithForm('.avatar-popup', {
  handleSubmitForm: ({avatar}) => {
    popupEditAvatar.renderLoading(true);
    api.changeAvatar({avatar})
      .then((data) => {
        userInfo.setUserAvatar({ avatar: data.avatar });
        popupEditAvatar.close()
      })
      .catch(err => console.log(`Ошибка при редактировании аватара: ${err}`))
      .finally(() => {popupEditAvatar.renderLoading(false)})
  }
});
popupEditAvatar.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open()
});


//Увеличение изображения
const popupImage = new PopupWithImage('.image-popup');
popupImage.setEventListeners();


//Экземпляры класса FormValidation 
const validProfileForm = new FormValidator(formValidationConfig, profileForm);
validProfileForm.enableValidation();

const validCardForm = new FormValidator(formValidationConfig, cardForm);
validCardForm.enableValidation();

const validAvatarForm = new FormValidator(formValidationConfig, avatarForm);
validAvatarForm.enableValidation();