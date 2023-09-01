import {
  DisplaySettingKeys,
  DisplaySettings,
  Gender,
} from '../type/displaySetting.ts';

export const GENDER_CATEGORY_TEXT_MALE = '男性';
export const GENDER_CATEGORY_TEXT_FEMALE = '女性';
export const GENDER_CATEGORY_TEXT_NEKAMA = '不明';

export const allGender: Gender[] = [
  GENDER_CATEGORY_TEXT_MALE,
  GENDER_CATEGORY_TEXT_FEMALE,
  GENDER_CATEGORY_TEXT_NEKAMA,
];

export const DISPLAY_SETTING_KEY_MALE = 'isMaleHidden';
export const DISPLAY_SETTING_KEY_FEMALE = 'isFemaleHidden';
export const DISPLAY_SETTING_KEY_NEKAMA = 'isNekamaHidden';

export const allDisplaySettingKey: DisplaySettingKeys = [
  DISPLAY_SETTING_KEY_MALE,
  DISPLAY_SETTING_KEY_FEMALE,
  DISPLAY_SETTING_KEY_NEKAMA,
];

export const defaultDisplaySettings: DisplaySettings = {
  [DISPLAY_SETTING_KEY_MALE]: false,
  [DISPLAY_SETTING_KEY_FEMALE]: false,
  [DISPLAY_SETTING_KEY_NEKAMA]: false,
};
