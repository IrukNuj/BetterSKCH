import { allDisplaySettingKey } from './const.ts';
import {
  DISPLAY_SETTINGS_STORAGE_KEY,
  loadDataFromLocalStorage,
  saveDataToLocalStorage,
  selectedDisPlaySettingKeysToStorageData,
} from './storage.ts';
import {
  attachFormContainerStyle,
  attachGenderButtonStyle,
  attachSubmitButtonStyle,
} from './style.ts';
import { DisplaySettingKey, DisplaySettings } from './types.ts';
import { displaySettingKeyToGender } from './util.ts';

const GENDER_FILER_BUTTON_ID = 'extension-button-gender-filter';
const CLASS_NAME_SELECTED = 'selected';

const currentDisplayOption = loadDataFromLocalStorage(
  DISPLAY_SETTINGS_STORAGE_KEY,
);

const createPopupForm = (currentDisplayOption: DisplaySettings) => {
  const formContainer = document.createElement('div');
  attachFormContainerStyle(formContainer);
  const form = document.createElement('form');

  // button作成
  allDisplaySettingKey.forEach((displaySettingKey: DisplaySettingKey) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = GENDER_FILER_BUTTON_ID;
    button.name = 'gender';
    button.value = displaySettingKey;
    button.innerText = displaySettingKeyToGender(displaySettingKey);

    const isAlreadySelected = currentDisplayOption[displaySettingKey];
    if (isAlreadySelected) button.classList.add(CLASS_NAME_SELECTED);

    attachGenderButtonStyle(button, displaySettingKey);

    button.addEventListener('click', () => {
      if (button.classList.contains(CLASS_NAME_SELECTED)) {
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
  attachSubmitButtonStyle(submitButton);
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
      if (button.classList.contains(CLASS_NAME_SELECTED)) {
        selectedOptions.push(button.value as DisplaySettingKey);
      }
    });

    const formattedDisplaySettings = selectedDisPlaySettingKeysToStorageData(
      selectedOptions,
    );

    saveDataToLocalStorage(
      DISPLAY_SETTINGS_STORAGE_KEY,
      formattedDisplaySettings,
    );
    location.reload();
  });

  formContainer.appendChild(form);
  return formContainer;
};

function insertPopupForm() {
  const targetElement = document.querySelector('#posts');
  if (targetElement) {
    const formContainer = createPopupForm(currentDisplayOption);
    targetElement.insertAdjacentElement('beforebegin', formContainer);
  }
}

export default insertPopupForm;
