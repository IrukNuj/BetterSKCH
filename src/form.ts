import attachButtonBaseStyle from "./style.ts";

export type Gender = '男性' | '女性' | '不明'
export type DisplaySetting = {
  isMaleDisplay: boolean
  isFemaleDisplay: boolean,
  isNekamaDisplay: boolean,
}

const allGender: Gender[] = [ '男性', '女性', '不明' ];
const defaultDisplaySetting = {
  isMaleDisplay: true,
  isFemaleDisplay: true,
  isNekamaDisplay: true,
}


const createPopupForm = () => {
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
    button.value = gender

    attachButtonBaseStyle(button, gender)

    button.addEventListener('click', () => {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        button.style.opacity = '0.8';
      } else {
        button.classList.add('selected');
        button.style.opacity = '0.3';
      }
    } );

    form.appendChild(button);
  });

 const loadDataFromLocalStorage(key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

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

    const formedOptions = {
      isMaleDisplay: loadDataFromLocalStorage('isMaleDisplay'),
      isFemaleDisplay: true,
      isNekamaDisplay: true,
    };

    selectedOptions.forEach( ( e ) =>
    {
      switch ( e )
      {
        case '男性':
          formedOptions.isMaleDisplay =
        case '男性':
          case '男性':

      }
    });

    // 選択項目をlocalStorageに保存
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    console.log('Data saved to localStorage:', selectedOptions);
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
