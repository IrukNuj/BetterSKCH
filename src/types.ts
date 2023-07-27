export type Gender = '男性' | '女性' | '不明';

export const allGender: Gender[] = ['男性', '女性', '不明'];

type IsMaleHidden = {
  isMaleHidden: boolean;
};
type IsFemaleHidden = {
  isFemaleHidden: boolean;
};

type IsNekamaHidden = {
  isNekamaHidden: boolean;
};

export type DisplaySettingKey =
  | 'isMaleHidden'
  | 'isFemaleHidden'
  | 'isNekamaHidden';
export type DisplaySettingKeys = [
  'isMaleHidden',
  'isFemaleHidden',
  'isNekamaHidden',
];

export const allDisplaySettingKey: DisplaySettingKeys = [
  'isMaleHidden',
  'isFemaleHidden',
  'isNekamaHidden',
];

export type DisplaySetting =
  | IsMaleHidden
  | IsFemaleHidden
  | IsNekamaHidden;

export type DisplaySettings =
  & IsMaleHidden
  & IsFemaleHidden
  & IsNekamaHidden;

export const defaultDisplaySettings: DisplaySettings = {
  isMaleHidden: false,
  isFemaleHidden: false,
  isNekamaHidden: false,
};

export type UserId = string;
export type BannedUsers = UserId[];
export const defaultBannedUsers: BannedUsers = [];
