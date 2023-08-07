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

export const DISPLAY_SETTING_KEY_MALE = 'isMaleHidden';
export const DISPLAY_SETTING_KEY_FEMALE = 'isFemaleHidden';
export const DISPLAY_SETTING_KEY_NEKAMA = 'isNekamaHidden';

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

export const allDisplaySettingKey: DisplaySettingKeys = [
  DISPLAY_SETTING_KEY_MALE,
  DISPLAY_SETTING_KEY_FEMALE,
  DISPLAY_SETTING_KEY_NEKAMA,
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
  [DISPLAY_SETTING_KEY_MALE]: false,
  [DISPLAY_SETTING_KEY_FEMALE]: false,
  [DISPLAY_SETTING_KEY_NEKAMA]: false,
};

export type UserId = string;
export type BannedUsers = UserId[];
export const defaultBannedUsers: BannedUsers = [];
