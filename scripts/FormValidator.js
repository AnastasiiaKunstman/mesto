class FormValidator {
  constructor(config, formSelector) {
    this._config = config,
    this._formSelector = formSelector,
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._config.inputSelector))
  }


  _preventDefaultSubmit(evt) {
     evt.preventDefault();
  };


  enableValidation() {
    this._formSelector.addEventListener('submit',this._preventDefaultSubmit);

    this._formSelector.addEventListener('input', () => {
      this._toggleButton(this._formSelector);
    });

    this._addInputListerners(this._formSelector);
    this._toggleButton(this._formSelector);

    this._formSelector.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButton(this._formSelector);
      }, 0);
    });
  };
  

  //Проверка валидности формы
  _handleFormInput(event) {
    this._input = event.target;
    this._inputId = this._input.id;
    this._errorElement = document.querySelector(`#${this._inputId}-error`);

    if (this._input.validity.valid) {
      this._input.classList.remove(this._config.inputErrorClass);
      this._errorElement.textContent = ' ';
    } else {
      this._input.classList.add(this._config.inputErrorClass);
      this._errorElement.textContent = this._input.validationMessage;
     }
  };


  //Изменение состояния кнопки "Сохранить"
  _toggleButton() {
    this._submitButton = this._formSelector.querySelector(this._config.submitButtonSelector);
    this._isFormValid = this._formSelector.checkValidity();

    this._submitButton.disabled = !this._isFormValid;
    this._submitButton.classList.toggle(this._config.inactiveButtonClass, !this._isFormValid);
  };

  //Функция-слушатель инпутов
  _addInputListerners = () => {
      this._inputList.forEach((item) => {
      item.addEventListener('input', (evt) => {
        this._handleFormInput (evt);
      });
    });
  };


};


export default FormValidator;