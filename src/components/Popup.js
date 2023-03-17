export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector),
            this._buttonClose = document.querySelector('.popup__close'),
            this._closePopups = document.querySelectorAll('.popup')
    };

    //Открыть попап 
    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        });
    };


    //Закрыть попап 
    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        });
    };

    //Закрыть по Escape 
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    };

    //Закрытие по оверлей + крестик 
    setEventListeners() {
        this._buttonClose.addEventListener('click', () => {
            this.close()
        });

        this._closePopups.forEach((item) => {
            item.addEventListener('mousedown', (evt) => {
                if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
                    this.close()
                };
            });
        });
    };
}