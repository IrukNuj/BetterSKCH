import loadDataFromLocalStorage from './storage.ts';
import { attachButtonBaseStyle, attachFormContainerStyle } from './style.ts';
import { DisplaySettings, Gender } from './types.ts';

const allGender: Gender[] = ['男性', '女性', '不明'];
const defaultDisplaySetting = {
  isMaleDisplay: true,
  isFemaleDisplay: true,
  isNekamaDisplay: true,
};

// これほんと汚い
const genderToDisplaySetting = (
  gender: Gender,
  displaySettings: DisplaySettings,
) => {
  switch (gender) {
    case '男性':
      return displaySettings.isMaleDisplay;
    case '女性':
      return displaySettings.isFemaleDisplay;
    case '不明':
      return displaySettings.isNekamaDisplay;
  }
};

const createPopupForm = () => {
  const currentDisplayOption = loadDataFromLocalStorage('displaySettings');

  const formContainer = document.createElement('div');
  formContainer.id = 'tag-menu-list';
  formContainer.className = 'tag-list';
  attachFormContainerStyle(formContainer);

  const form = document.createElement('form');

  const buttonOptions: Gender[] = allGender;
  buttonOptions.forEach((gender: Gender) => {
    const button = document.createElement('input');
    button.type = 'button';
    button.name = 'gender';
    button.value = gender;
    attachButtonBaseStyle(button, gender);

    const isAlreadySelected = !genderToDisplaySetting(
      gender,
      currentDisplayOption,
    );
    if (isAlreadySelected) button.classList.add('selected');

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
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // ここの型どうしようかな
    const selectedOptions: Gender[] = [];

    const buttons = form.querySelectorAll('input[type="button"]') as NodeListOf<
      HTMLInputElement
    >;

    buttons.forEach((button: HTMLInputElement) => {
      if (button.classList.contains('selected')) {
        button.value as Gender;
        // deno-lint-ignore ban-ts-comment
        //  @ts-expect-error
        selectedOptions.push(button.value);
      }
    });

    const formattedOptions = defaultDisplaySetting;

    selectedOptions.forEach((gender) => {
      genderToDisplaySetting(gender, formattedOptions);
    });

    // 選択項目をlocalStorageに保存
    localStorage.setItem('displaySettings', JSON.stringify(formattedOptions));
    console.log('Data saved to localStorage:', formattedOptions);
  });

  formContainer.appendChild(form);
  return formContainer;
};

function insertPopupForm() {
  const targetElement = document.querySelector('.tag-menu');
  if (targetElement) {
    const formContainer = createPopupForm();
    targetElement.insertAdjacentElement('beforebegin', formContainer);
  } else {
    console.error('Element with class "tag-menu" not found.');
  }
}

export default insertPopupForm;
