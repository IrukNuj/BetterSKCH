import { loadDataFromLocalStorage, saveDataToLocalStorage } from './storage.ts';
import { attachButtonBaseStyle, attachFormContainerStyle } from './style.ts';
import { DisplaySettingKey, Gender } from './types.ts';
import { genderToDisplaySetting } from './util.ts';

const createPopupForm = () => {
  const currentDisplayOption = loadDataFromLocalStorage('displaySettings');

  const formContainer = document.createElement('div');
  attachFormContainerStyle(formContainer);
  const form = document.createElement('form');

  // button作成
  const buttonOptions: Gender[] = ['男性', '女性', '不明'];
  buttonOptions.forEach((gender: Gender) => {
    const button = document.createElement('input');
    button.type = 'button';
    button.id = 'extension-button-gender-filter';
    button.name = 'gender';
    button.value = genderToDisplaySetting(gender);
    const currentGenderSettingKey = genderToDisplaySetting(gender);
    const isAlreadySelected = !currentDisplayOption[currentGenderSettingKey];
    if (isAlreadySelected) button.classList.add('selected');

    attachButtonBaseStyle(button, gender);

    button.addEventListener('click', () => {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        button.style.opacity = '0.8';
      } else {
        button.classList.add('selected');
        button.style.opacity = '0.3';
      }
    });

    form.appendChild(button);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = '表示をきりかえる';
  form.appendChild(submitButton);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedOptions: DisplaySettingKey[] = [];
    const buttons = form.querySelectorAll(
      '#extension-button-gender-filter',
    ) as NodeListOf<
      HTMLInputElement
    >;

    buttons.forEach((button: HTMLInputElement) => {
      if (button.classList.contains('selected')) {
        button.value as DisplaySettingKey;
        // deno-lint-ignore ban-ts-comment
        //  @ts-expect-error
        selectedOptions.push(button.value);
      }
    });

    const formattedOptions = currentDisplayOption;
    selectedOptions.forEach((e) => formattedOptions[e] = false);

    saveDataToLocalStorage('displaySettings', formattedOptions);
    // console.log('Data saved to localStorage:', formattedOptions);

    location.reload();
  });

  formContainer.appendChild(form);
  return formContainer;
};

function insertPopupForm() {
  const targetElement = document.querySelector('#posts');
  if (targetElement) {
    const formContainer = createPopupForm();
    targetElement.insertAdjacentElement('beforebegin', formContainer);
  }
}

export default insertPopupForm;
