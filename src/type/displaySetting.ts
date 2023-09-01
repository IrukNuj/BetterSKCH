import {
  DISPLAY_SETTING_KEY_FEMALE,
  DISPLAY_SETTING_KEY_MALE,
  DISPLAY_SETTING_KEY_NEKAMA,
  GENDER_CATEGORY_TEXT_FEMALE,
  GENDER_CATEGORY_TEXT_MALE,
  GENDER_CATEGORY_TEXT_NEKAMA,
} from '../constants/displaySettings.ts';

export type Gender =
  | typeof GENDER_CATEGORY_TEXT_MALE
  | typeof GENDER_CATEGORY_TEXT_FEMALE
  | typeof GENDER_CATEGORY_TEXT_NEKAMA;

export type DisplaySettingKeys = [
  typeof DISPLAY_SETTING_KEY_MALE,
  typeof DISPLAY_SETTING_KEY_FEMALE,
  typeof DISPLAY_SETTING_KEY_NEKAMA,
];

export type DisplaySettings = {
  [DISPLAY_SETTING_KEY_MALE]: boolean;
  [DISPLAY_SETTING_KEY_FEMALE]: boolean;
  [DISPLAY_SETTING_KEY_NEKAMA]: boolean;
};

export type DisplaySettingKey = keyof DisplaySettings;
