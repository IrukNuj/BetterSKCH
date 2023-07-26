export type Gender = '男性' | '女性' | '不明';

export const allGender: Gender[] = ['男性', '女性', '不明'];

type IsMaleDisplay = {
  isMaleDisplay: boolean;
};

type IsFemaleDisplay = {
  isFemaleDisplay: boolean;
};

type IsNekamaDisplay = {
  isNekamaDisplay: boolean;
};

export type DisplaySettingKey =
  | 'isMaleDisplay'
  | 'isFemaleDisplay'
  | 'isNekamaDisplay';
export type DisplaySettingKeys = [
  'isMaleDisplay',
  'isFemaleDisplay',
  'isNekamaDisplay',
];

export const allDisplaySettingKey: DisplaySettingKeys = [
  'isMaleDisplay',
  'isFemaleDisplay',
  'isNekamaDisplay',
];

export type DisplaySetting =
  | IsMaleDisplay
  | IsFemaleDisplay
  | IsNekamaDisplay;

export type DisplaySettings =
  & IsMaleDisplay
  & IsFemaleDisplay
  & IsNekamaDisplay;

export const defaultDisplaySettings: DisplaySettings = {
  isMaleDisplay: true,
  isFemaleDisplay: true,
  isNekamaDisplay: true,
};
