import { DisplaySettingKeys, DisplaySettings } from '../type/displaySetting.ts';

export const DISPLAY_SETTING_KEY = {
  MALE: 'isMaleHidden',
  FEMALE: 'isFemaleHidden',
  NEKAMA: 'isNekamaHidden',
} as const;

export const allDisplaySettingKey: DisplaySettingKeys = Object.values(
  DISPLAY_SETTING_KEY,
);

export const defaultDisplaySettings: DisplaySettings = {
  [DISPLAY_SETTING_KEY.MALE]: false,
  [DISPLAY_SETTING_KEY.FEMALE]: false,
  [DISPLAY_SETTING_KEY.NEKAMA]: false,
};
