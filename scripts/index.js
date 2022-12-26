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