const profile = document.querySelector('.profile');
const popupButton = profile.querySelector('.profile__info-editButton');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupClose = document.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');
let username = document.querySelector('.popup__input_username');
let job = document.querySelector('.popup__input_job');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');

console.log(formElement);

function openPopup() {
    popup.classList.toggle('popup_opened');
    username.value = profileTitle.textContent;
    job.value = profileSubtitle.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function handleFormSubmit (evt) {
    evt.preventDefault();    // Эта строчка отменяет стандартную отправку формы.
    profileTitle.textContent = username.value;
    profileSubtitle.textContent = job.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка» 
formElement.addEventListener('submit', handleFormSubmit);

popupButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', openPopup);