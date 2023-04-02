import { Popup } from "./Popup.js"

export class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._buttonDel = document.querySelector('.delete-popup__button-save')
    };


    setSumbitAction(action) {
        this._handleSubmitCallback = action
    };

    setEventListeners() {
        super.setEventListeners();

        this._buttonDel.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSubmitCallback();
            this.close()
        });

    };
}