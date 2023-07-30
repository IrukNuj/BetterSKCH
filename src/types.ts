export const GENDER_CATEGORY_TEXT_MALE = '男性';
export const GENDER_CATEGORY_TEXT_FEMALE = '女性';
export const GENDER_CATEGORY_TEXT_NEKAMA = '不明';

export type Gender =
  | typeof GENDER_CATEGORY_TEXT_MALE
  | typeof GENDER_CATEGORY_TEXT_FEMALE
  | typeof GENDER_CATEGORY_TEXT_NEKAMA;

export const allGender: Gender[] = [
  GENDER_CATEGORY_TEXT_MALE,
  GENDER_CATEGORY_TEXT_FEMALE,
  GENDER_CATEGORY_TEXT_NEKAMA,
];

export const DISPLAY_SETTING_KEY_IS_MALE_HIDDEN = 'isMaleHidden';
export const DISPLAY_SETTING_KEY_IS_FEMALE_HIDDEN = 'isFemaleHidden';
export const DISPLAY_SETTING_KEY_IS_NEKAMA_HIDDEN = 'isNekamaHidden';

type IsMaleHidden = {
  [DISPLAY_SETTING_KEY_IS_MALE_HIDDEN]: boolean;
};
type IsFemaleHidden = {
  [DISPLAY_SETTING_KEY_IS_FEMALE_HIDDEN]: boolean;
};

type IsNekamaHidden = {
  [DISPLAY_SETTING_KEY_IS_NEKAMA_HIDDEN]: boolean;
};

export type DisplaySettingKeys = [
  typeof DISPLAY_SETTING_KEY_IS_MALE_HIDDEN,
  typeof DISPLAY_SETTING_KEY_IS_FEMALE_HIDDEN,
  typeof DISPLAY_SETTING_KEY_IS_NEKAMA_HIDDEN,
];

export const allDisplaySettingKey: DisplaySettingKeys = [
  DISPLAY_SETTING_KEY_IS_MALE_HIDDEN,
  DISPLAY_SETTING_KEY_IS_FEMALE_HIDDEN,
  DISPLAY_SETTING_KEY_IS_NEKAMA_HIDDEN,
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

export const defaultDisplaySettings: DisplaySettings = {
  isMaleHidden: false,
  isFemaleHidden: false,
  isNekamaHidden: false,
};

export type UserId = string;
export type BannedUsers = UserId[];
export const defaultBannedUsers: BannedUsers = [];
