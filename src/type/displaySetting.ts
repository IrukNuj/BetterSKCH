import { DISPLAY_SETTING_KEY } from '../constants/displaySettings.ts';

export type DisplaySettingKeys =
  typeof DISPLAY_SETTING_KEY[keyof typeof DISPLAY_SETTING_KEY][];

export type DisplaySettings = {
  [k in DisplaySettingKeys[number]]: boolean;
};

export type DisplaySettingKey = keyof DisplaySettings;
