import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmitForm}) {
        super(popupSelector);
        this._form = this._popupSelector.querySelector('.popup__form'),
        this._inputs = this._form.querySelectorAll('.popup__input'),
        this._handleSubmitForm = handleSubmitForm
    }

    _getInputValues() {

        this._formValues = {};
        this._inputs.forEach(input => {
            this._formValues[input.name] = input.value
        });

        return this._formValues
    };

    setInputValues(data) {
        this._inputs.forEach(input => {
            input.value = data[input.name]
        });
    };


    setEventListeners() {
        this._form.addEventListener ('submit', (evt) => {
            evt.preventDefault(),
            this._handleSubmitForm(this._getInputValues()),
            this.close()
        });

        super.setEventListeners();
    };

    close() {
        super.close();
        this._form.reset()
    };

}