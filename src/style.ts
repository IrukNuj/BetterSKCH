import { Gender } from './form.ts';

const resetButtonStyle = (button: HTMLInputElement) => {
  button.style.backgroundColor = 'transparent';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.outline = 'none';
  button.style.padding = '0';
  button.style.appearance = 'none';
};

const attachButtonBaseStyle = (button: HTMLInputElement, gender: Gender) => {
  resetButtonStyle(button);

  button.style.display = 'inline-block';
  button.style.lineHeight = '25px';
  button.style.color = '';
  button.style.height = '30px';
  button.style.color = '#fff';
  button.style.textDecoration = 'none';
  button.style.margin = '0 8px 0px 0px';
  button.style.padding = '0 5px';
  button.style.borderRadius = '2px';
  button.style.opacity = button.className === 'selected' ? '0.3' : '0.8';

  switch (gender) {
    case '男性':
      button.style.background = 'linear-gradient(#347ddb, #34c5db)';
      break;
    case '女性':
      button.style.background = 'linear-gradient(#dc3460, #dc34a9)';
      break;
    case '不明':
      button.style.background = 'linear-gradient(#5b6e78, #789094)';
  }
};

export default attachButtonBaseStyle;
