import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imagePopupPhoto = this._popup.querySelector('.image-popup__photo');
        this._imagePopupTitle = this._popup.querySelector('.image-popup__title');
    };

    open(link, name) {
        this._imagePopupPhoto.src = link;
        this._imagePopupPhoto.alt = name;
        this._imagePopupTitle.textContent = name;

        super.open();
    };
};