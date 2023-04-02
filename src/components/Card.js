class Card {
  constructor(data, myId, { handleCardClick, handleLikeIconClick, handleDeleteIconClick }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._like = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeIconClick = handleLikeIconClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._myId = myId;
    this._templateSelector = templateSelector;
  };

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  };


  generateCard() {
    this._element = this._getTemplate();

    this._elementTitle = this._element.querySelector('.element__title');
    this._elementPhoto = this._element.querySelector('.element__image');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementDel = this._element.querySelector('.element__del');


    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._name;
    this._elementTitle.textContent = this._name;

    this._setEventListeners();
    this.setLikeCounter(this._like);

    if (this._ownerId !== this._myId) {
      this._elementDel.remove()
    };

    return this._element
  };


  //Вытащить id карточки
  getId() {
    return this._cardId
  };


  //Лайк
  setLikeCounter(arrLikes) {
    this._like = arrLikes;
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._likeCounter.textContent = this._like.length;

    if (this.isLiked()) {
      this.addLike()
    } else {
      this.removeLike()
    }
  };

  isLiked() {
    return this._like.some(data => data._id === this._myId)
  };

  addLike() {
    this._elementLike.classList.add('element__like_active')
  };

  removeLike() {
    this._elementLike.classList.remove('element__like_active')
  };


  //Увеличение
  handleCardClick() {
    this._handleCardClick(this._link, this._name)
  };


  //Удаление 
  deleteCard() {
    this._element.remove()
  };

  //Обработчик
  _setEventListeners() {
    this._elementLike.addEventListener('click', () => {
      this._handleLikeIconClick(this._cardId, this)
    });

    this._elementDel.addEventListener('click', () => {
      this._handleDeleteIconClick(this._cardId, this)
    });

    this._elementPhoto.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name)
    });
  };
};

export default Card;