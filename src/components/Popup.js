export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector),
            this._buttonClose = document.querySelector('.popup__close'),
            this._handleEscClose = this._handleEscClose.bind(this)
    };

    //Открыть попап 
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };


    //Закрыть попап 
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    };

    //Закрыть по Escape 
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    };

    //Закрытие по оверлей + крестик 
    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
                this.close()
            };
        });
    };
};