import { loadDataFromLocalStorage, saveDataToLocalStorage } from './storage.ts';
import { attachButtonBaseStyle, attachFormContainerStyle } from './style.ts';
import {
  allDisplaySettingKey,
  defaultDisplaySettings,
  DisplaySettingKey,
  DisplaySettingKeys,
} from './types.ts';
import { displaySettingKeyToGender } from './util.ts';

const GENDER_FILER_BUTTON_ID = 'extension-button-gender-filter';

const createPopupForm = () => {
  const currentDisplayOption = loadDataFromLocalStorage('displaySettings');

  const formContainer = document.createElement('div');
  attachFormContainerStyle(formContainer);
  const form = document.createElement('form');

  // button作成
  const buttonOptions: DisplaySettingKeys = allDisplaySettingKey;
  buttonOptions.forEach((displaySettingKey: DisplaySettingKey) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = GENDER_FILER_BUTTON_ID;
    button.name = 'gender';
    button.value = displaySettingKey;
    button.innerText = displaySettingKeyToGender(displaySettingKey);
    const isAlreadySelected = !currentDisplayOption[displaySettingKey];
    if (isAlreadySelected) button.classList.add('selected');

    attachButtonBaseStyle(button, displaySettingKey);

    button.addEventListener('click', () => {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        button.style.opacity = '0.85';
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
      `#${GENDER_FILER_BUTTON_ID}`,
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

    const formattedOptions = defaultDisplaySettings;
    selectedOptions.forEach((e) => formattedOptions[e] = false);

    console.log('current:', currentDisplayOption);
    saveDataToLocalStorage('displaySettings', formattedOptions);
    console.log('Data saved to localStorage:', formattedOptions);

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
