class Card {
  constructor({data, handleCardClick}, templateSelector) {
    this._name = data.name,
    this._link = data.link,
    this._alt = data.alt,
    this._templateSelector = templateSelector,
    this._handleCardClick = handleCardClick
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }


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


        return this._element;
    };


    //Лайк
    _handleLikeClick() {
        this._elementLike.classList.toggle('element__like_active');
    };


    //Удаление
    _handleDelClick() {
        this._element.remove();
    };
     
    
    //Увеличение
    handleCardClick() {
      this._handleCardClick(this._link, this._name);
    };


    //Обработчик
     _setEventListeners() {
      this._elementLike.addEventListener('click', () => {
        this._handleLikeClick();
      });
      this._elementDel.addEventListener('click', () => {
        this._handleDelClick();
      });
      this._elementPhoto.addEventListener('click', () => {
        this._handleCardClick( this._link, this._name)
      });
    };

};

export default Card;