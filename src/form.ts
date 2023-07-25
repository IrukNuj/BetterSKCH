import loadDataFromLocalStorage from './storage.ts';
import attachButtonBaseStyle from './style.ts';
import { DisplaySettings } from './types.ts';

export type Gender = '男性' | '女性' | '不明';

const allGender: Gender[] = ['男性', '女性', '不明'];
const defaultDisplaySetting = {
  isMaleDisplay: true,
  isFemaleDisplay: true,
  isNekamaDisplay: true,
};

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
  formContainer.style.position = 'relative';
  formContainer.style.width = '80%';

  const form = document.createElement('form');
  form.id = 'myForm';

  const buttonOptions: Gender[] = allGender;
  buttonOptions.forEach((gender: Gender) => {
    const button = document.createElement('input');
    button.type = 'button';
    button.name = 'gender';
    button.value = gender;
    const isAlreadySelected = !genderToDisplaySetting(
      gender,
      currentDisplayOption,
    );
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
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // ここの型どうしようかな
    const selectedOptions: string[] = [];

    const buttons = form.querySelectorAll('input[type="button"]') as NodeListOf<
      HTMLInputElement
    >;

    buttons.forEach((button: HTMLInputElement) => {
      if (button.classList.contains('selected')) {
        selectedOptions.push(button.value);
      }
    });

    const formattedOptions = defaultDisplaySetting;

    selectedOptions.forEach((e) => {
      switch (e) {
        case '男性':
          formattedOptions.isMaleDisplay = false;
          break;
        case '女性':
          formattedOptions.isFemaleDisplay = false;
          break;
        case '中性':
          formattedOptions.isNekamaDisplay = false;
          break;
      }
    });

    // 選択項目をlocalStorageに保存
    localStorage.setItem('displaySettings', JSON.stringify(formattedOptions));
    console.log('Data saved to localStorage:', formattedOptions);
  });

  formContainer.appendChild(form);
  return formContainer;
};

function insertPopupForm() {
  const targetElement = document.querySelector('.btn-post-create');
  if (targetElement) {
    const formContainer = createPopupForm();
    targetElement.insertAdjacentElement('beforebegin', formContainer);
  } else {
    console.error('Element with class "btn-post-create" not found.');
  }
}

export default insertPopupForm;
