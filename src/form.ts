import { allDisplaySettingKey } from './constants/displaySettings.ts';
import { STORAGE_KEY } from './constants/storage.ts';
import {
  loadDataFromLocalStorage,
  saveDataToLocalStorage,
  selectedDisPlaySettingKeysToStorageData,
} from './storage.ts';
import {
  attachFormContainerStyle,
  attachGenderButtonStyle,
  attachInformationButtonStyle,
  attachSubmitButtonStyle,
} from './style.ts';
import { DisplaySettingKey, DisplaySettings } from './type/displaySetting.ts';
import { displaySettingKeyToGender } from './util.ts';

const GENDER_FILER_BUTTON_ID = 'extension-button-gender-filter';
const CLASS_NAME_SELECTED = 'selected';

const INFORMATION_URL = 'https://pastebin.com/ZydDL2hJ';

const createPopupForm = (currentDisplayOption: DisplaySettings) => {
  const formContainer = document.createElement('div');
  attachFormContainerStyle(formContainer);
  const form = document.createElement('form');

  // button作成
  allDisplaySettingKey.forEach((displaySettingKey: DisplaySettingKey) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = `${GENDER_FILER_BUTTON_ID}-${displaySettingKey}`;
    button.name = 'gender';
    button.value = displaySettingKey;
    button.innerText = displaySettingKeyToGender(displaySettingKey);

    const isAlreadySelected = currentDisplayOption[displaySettingKey];
    if (isAlreadySelected) button.classList.add(CLASS_NAME_SELECTED);

    attachGenderButtonStyle(button, displaySettingKey);

    button.addEventListener('click', () => {
      if (button.classList.contains(CLASS_NAME_SELECTED)) {
        button.classList.remove(CLASS_NAME_SELECTED);
        button.style.opacity = '0.85';
      } else {
        button.classList.add(CLASS_NAME_SELECTED);
        button.style.opacity = '0.3';
      }
    });

    form.appendChild(button);
  });

  // const banWordForm = document.createElement('input');
  // banWordForm.type = 'text';
  // banWordForm.name = 'banWord';
  // banWordForm.placeholder = 'banWord';
  // banWordForm.value = '';
  // form.appendChild(banWordForm);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = '表示をきりかえる';
  attachSubmitButtonStyle(submitButton);

  form.appendChild(submitButton);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedDisplaySettingKeys: DisplaySettingKey[] = [];
    const selector = allDisplaySettingKey.map((key) => {
      `#${GENDER_FILER_BUTTON_ID}-${key}`;
    }).join(',');
    const buttons = form.querySelectorAll(selector) as NodeListOf<
      HTMLInputElement
    >;

    buttons.forEach((button: HTMLInputElement) => {
      if (button.classList.contains(CLASS_NAME_SELECTED)) {
        selectedDisplaySettingKeys.push(button.value as DisplaySettingKey);
      }
    });

    const formattedDisplaySettings = selectedDisPlaySettingKeysToStorageData(
      selectedDisplaySettingKeys,
    );

    saveDataToLocalStorage(
      STORAGE_KEY.DISPLAY_SETTINGS,
      formattedDisplaySettings,
    );
    location.reload();
  });

  formContainer.appendChild(form);
  return formContainer;
};

const createInformationForm = () => {
  const formContainer = document.createElement('div');
  attachFormContainerStyle(formContainer);
  const form = document.createElement('form');

  const informationLinkButton = document.createElement('button');
  informationLinkButton.type = 'button';
  informationLinkButton.textContent = 'お知らせ';
  attachInformationButtonStyle(informationLinkButton);

  informationLinkButton.addEventListener('click', () => {
    window.open(INFORMATION_URL);
  });

  form.appendChild(informationLinkButton);
  formContainer.appendChild(form);

  return formContainer;
};

const insertPopupForm = () => {
  const currentDisplayOption = loadDataFromLocalStorage(
    STORAGE_KEY.DISPLAY_SETTINGS,
  );

  const targetElement = document.querySelector('#posts');
  if (targetElement) {
    const formContainer = createPopupForm(currentDisplayOption);
    targetElement.insertAdjacentElement('beforebegin', formContainer);
    const informationFormContainer = createInformationForm();
    targetElement.insertAdjacentElement(
      'beforebegin',
      informationFormContainer,
    );
  }
};

export default insertPopupForm;
