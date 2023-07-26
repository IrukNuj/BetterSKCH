import { DisplaySettingKey, Gender } from './types.ts';

const resetButtonStyle = (button: HTMLButtonElement) => {
  button.style.backgroundColor = 'transparent';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.outline = 'none';
  button.style.padding = '0';
  button.style.appearance = 'none';
};

export function attachButtonBaseStyle(
  button: HTMLButtonElement,
  displaySettingKey: DisplaySettingKey,
) {
  resetButtonStyle(button);

  button.style.display = 'inline-block';
  button.style.lineHeight = '25px';
  button.style.color = '';
  button.style.height = '30px';
  button.style.color = '#fff';
  button.style.textDecoration = 'none';
  button.style.margin = '0 8px 0px 0px';
  button.style.padding = '0 16px';
  button.style.borderRadius = '2px';
  button.style.opacity = button.className === 'selected' ? '0.3' : '0.85';

  switch (displaySettingKey) {
    case 'isMaleDisplay':
      button.style.background = 'linear-gradient(#347ddb, #34c5db)';
      break;
    case 'isFemaleDisplay':
      button.style.background = 'linear-gradient(#dc3460, #dc34a9)';
      break;
    case 'isNekamaDisplay':
      button.style.background = 'linear-gradient(#5b6e78, #789094)';
  }
}

export function attachFormContainerStyle(formContainer: HTMLDivElement) {
  formContainer.style.position = 'relative';
  formContainer.style.display = 'flex';
  formContainer.style.justifyContent = 'center';
}
