export type Gender = '男性' | '女性' | '不明';

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
export type DisplaySetting =
  | IsMaleDisplay
  | IsFemaleDisplay
  | IsNekamaDisplay;

export type DisplaySettings =
  & IsMaleDisplay
  & IsFemaleDisplay
  & IsNekamaDisplay;
