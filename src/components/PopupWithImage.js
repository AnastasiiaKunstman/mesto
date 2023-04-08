import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imagePopupPhoto = this._popup.querySelector('.popup__photo-image');
        this._imagePopupTitle = this._popup.querySelector('.popup__title-image');
    };

    open(link, name) {
        this._imagePopupPhoto.src = link;
        this._imagePopupPhoto.alt = name;
        this._imagePopupTitle.textContent = name;

        super.open();
    };
};