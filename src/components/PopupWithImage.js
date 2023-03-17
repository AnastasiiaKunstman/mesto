import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imagePopupPhoto = document.querySelector('.image-popup__photo');
        this._imagePopupTitle = document.querySelector('.image-popup__title');
    };

    open(link, name) {
        this._imagePopupPhoto.src = link;
        this._imagePopupTitle.textContent = name;

        super.open();
    };
};