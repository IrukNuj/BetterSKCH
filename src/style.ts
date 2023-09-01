import { DisplaySettingKey } from './type/displaySetting.ts';

const resetButtonStyle = (button: HTMLButtonElement) => {
  button.style.backgroundColor = 'transparent';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.outline = 'none';
  button.style.padding = '0';
  button.style.appearance = 'none';
};

const attachButtonBaseStyle = (button: HTMLButtonElement) => {
  resetButtonStyle(button);
  button.style.fontFamily =
    '-apple-system, BlinkMacSystemFont, \'Helvetica Neue\', \'Segoe UI\', \'Noto Sans Japanese\', \'ヒラギノ角ゴ ProN W3\', Meiryo, sans-serif';
  button.style.fontWeight = 'bold';
};

export function attachGenderButtonStyle(
  button: HTMLButtonElement,
  displaySettingKey: DisplaySettingKey,
) {
  resetButtonStyle(button);
  attachButtonBaseStyle(button);

  button.style.display = 'inline-block';
  button.style.lineHeight = '25px';
  button.style.height = '30px';
  button.style.color = '#fff';
  button.style.textDecoration = 'none';
  button.style.margin = '0 8px 0px 0px';
  button.style.padding = '0 16px';
  button.style.borderRadius = '2px';
  button.style.opacity = button.className === 'selected' ? '0.2' : '0.85';

  switch (displaySettingKey) {
    case 'isMaleHidden':
      button.style.background = 'linear-gradient(#347ddb, #34c5db)';
      break;
    case 'isFemaleHidden':
      button.style.background = 'linear-gradient(#dc3460, #dc34a9)';
      break;
    case 'isNekamaHidden':
      button.style.background = 'linear-gradient(#5b6e78, #789094)';
  }
}

export function attachFormContainerStyle(formContainer: HTMLDivElement) {
  formContainer.style.position = 'relative';
  formContainer.style.display = 'flex';
  formContainer.style.justifyContent = 'center';
}

export function attachSubmitButtonStyle(submitButton: HTMLButtonElement) {
  attachButtonBaseStyle(submitButton);

  submitButton.style.background = '#ecf0f1';
  submitButton.style.height = '30px';
  submitButton.style.padding = '0 16px';
  submitButton.style.color = 'rgb(52, 73, 94)';
}

export function attachBanButtonStyle(
  banButton: HTMLButtonElement,
) {
  attachButtonBaseStyle(banButton);

  banButton.style.position = 'absolute';
  banButton.style.top = '20%';
  banButton.style.right = '4%';
  banButton.style.width = '22%';
  banButton.style.height = '25%';
  banButton.style.fontSize = '20%';
  banButton.style.border = '0.8px solid white';
  banButton.style.borderRadius = '2px';
  banButton.style.paddingBottom = '20px';
  banButton.style.color = '#fff';
  banButton.style.background = '#dc3460';
  // banButton.style.color = isAlreadyBlocked ? '#dc3460' : '#fff';
  // banButton.style.background = isAlreadyBlocked ? '#fff' : '#dc3460';
}
