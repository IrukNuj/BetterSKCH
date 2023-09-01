import {
  BANNED_USER_STORAGE_KEY,
  DISPLAY_SETTINGS_STORAGE_KEY,
} from '../constants/storage.ts';
import { BannedUsers } from './bannedUsers.ts';
import { DisplaySettings } from './displaySetting.ts';

export type StorageKey =
  | typeof DISPLAY_SETTINGS_STORAGE_KEY
  | typeof BANNED_USER_STORAGE_KEY;

export type StorageData = DisplaySettings | BannedUsers;

export type AllStorageData = {
  [DISPLAY_SETTINGS_STORAGE_KEY]: DisplaySettings;
  [BANNED_USER_STORAGE_KEY]: BannedUsers;
};
