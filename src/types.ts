import {
  DISPLAY_SETTING_KEY_FEMALE,
  DISPLAY_SETTING_KEY_MALE,
  DISPLAY_SETTING_KEY_NEKAMA,
  GENDER_CATEGORY_TEXT_FEMALE,
  GENDER_CATEGORY_TEXT_MALE,
  GENDER_CATEGORY_TEXT_NEKAMA,
} from './const.ts';

export type Gender =
  | typeof GENDER_CATEGORY_TEXT_MALE
  | typeof GENDER_CATEGORY_TEXT_FEMALE
  | typeof GENDER_CATEGORY_TEXT_NEKAMA;

type IsMaleHidden = {
  [DISPLAY_SETTING_KEY_MALE]: boolean;
};
type IsFemaleHidden = {
  [DISPLAY_SETTING_KEY_FEMALE]: boolean;
};
type IsNekamaHidden = {
  [DISPLAY_SETTING_KEY_NEKAMA]: boolean;
};

export type DisplaySettingKeys = [
  typeof DISPLAY_SETTING_KEY_MALE,
  typeof DISPLAY_SETTING_KEY_FEMALE,
  typeof DISPLAY_SETTING_KEY_NEKAMA,
];

export type DisplaySetting =
  | IsMaleHidden
  | IsFemaleHidden
  | IsNekamaHidden;

export type DisplaySettings =
  & IsMaleHidden
  & IsFemaleHidden
  & IsNekamaHidden;

export type DisplaySettingKey = keyof DisplaySettings;

export type UserId = string;
export type BannedUsers = UserId[];
