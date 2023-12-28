const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const button = document.querySelector('button');

form.addEventListener('input', onFormInput);
button.addEventListener('submit', onButtonSubmit);
let localStorageObject = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateObject();

function onButtonSubmit(event) {
  event.preventDefault();

  console.log(localStorageObject);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function onFormInput(evt) {
  localStorageObject[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageObject));
}

function populateObject() {
  const localStorageObject = localStorage.getItem(STORAGE_KEY);

  if (localStorageObject) {
    console.log(JSON.parse(localStorageObject));
  }
}
