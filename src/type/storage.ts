import { STORAGE_KEY } from '../constants/storage.ts';
import { BannedUsers } from './bannedUsers.ts';
import { DisplaySettings } from './displaySetting.ts';

export type StorageKey = typeof STORAGE_KEY[keyof typeof STORAGE_KEY];

export type AllStorageData = {
  [STORAGE_KEY.DISPLAY_SETTINGS]: DisplaySettings;
  [STORAGE_KEY.BANNED_USER]: BannedUsers;
};

export type StorageData = AllStorageData[keyof AllStorageData];
