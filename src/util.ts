import { DisplaySettingKey, Gender } from './types.ts';

export function genderToDisplaySetting(gender: Gender): DisplaySettingKey {
  switch (gender) {
    case '男性':
      return 'isMaleDisplay';
    case '女性':
      return 'isFemaleDisplay';
    case '不明':
      return 'isNekamaDisplay';
  }
}

export function displaySettingKeyToGender(
  displaySettingKey: DisplaySettingKey,
): Gender {
  switch (displaySettingKey) {
    case 'isMaleDisplay':
      return '男性';
    case 'isFemaleDisplay':
      return '女性';
    case 'isNekamaDisplay':
      return '不明';
  }
}
