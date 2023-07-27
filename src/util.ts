import { DisplaySettingKey, Gender } from './types.ts';

export function genderToDisplaySetting(gender: Gender): DisplaySettingKey {
  switch (gender) {
    case '男性':
      return 'isMaleHidden';
    case '女性':
      return 'isFemaleHidden';
    case '不明':
      return 'isNekamaHidden';
  }
}

export function displaySettingKeyToGender(
  displaySettingKey: DisplaySettingKey,
): Gender {
  switch (displaySettingKey) {
    case 'isMaleHidden':
      return '男性';
    case 'isFemaleHidden':
      return '女性';
    case 'isNekamaHidden':
      return '不明';
  }
}
