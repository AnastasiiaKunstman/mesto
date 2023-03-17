class FormValidator {
  constructor(config, form) {
    this._config = config,
    this._form = form,
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector)),
    this._submitButton = this._form.querySelector(this._config.submitButtonSelector)
  };

  _preventDefaultSubmit(evt) {
    evt.preventDefault();
  };


  enableValidation() {
    this._form.addEventListener('submit', this._preventDefaultSubmit);

    this._form.addEventListener('input', () => {
      this._toggleButton(this._form);
    });

    this._addInputListerners(this._form);
    this._toggleButton(this._form);

    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButton(this._form);
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
  _toggleButton = () => {
    this._isFormValid = this._form.checkValidity();

    this._submitButton.disabled = !this._isFormValid;
    this._submitButton.classList.toggle(this._config.inactiveButtonClass, !this._isFormValid);
  };


  //Функция-слушатель инпутов
  _addInputListerners = () => {
    this._inputList.forEach((input) => {
      input.addEventListener('input', (event) => {
        this._handleFormInput(event);
      });
    });
  };
};


export default FormValidator;