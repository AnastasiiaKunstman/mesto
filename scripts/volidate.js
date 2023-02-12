const formValidationConfig = {
  formSelector:'.popup__form',
  inputSelector:'.popup__input',
  submitButtonSelector:'.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-visible'
};

function disableSubmit(evt) {
  evt.preventDefault();
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    enableFormValidation(form, config);
  });

};


function enableFormValidation(form, config) {

  form.addEventListener('submit', disableSubmit);
  form.addEventListener('input', () => {
    toggleButton(form, config);
  });

  addInputListerners(form, config);
  toggleButton(form, config);

  form.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButton(form, config);
    }, 0);
  });
};

function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = ' ';
  } else {
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
};

function toggleButton(form, config) {
  const submitButton = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();

  submitButton.disabled = !isFormValid;
  submitButton.classList.toggle('popup__button-save_disabled', !isFormValid);
};


function addInputListerners(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));

    inputList.forEach(function(item) {
        item.addEventListener('input', (event) => {
          handleFormInput(event, config)
        });
      });
  };

enableValidation(formValidationConfig);