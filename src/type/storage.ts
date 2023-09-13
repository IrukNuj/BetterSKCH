import { STORAGE_KEY } from '../constants/storage.ts';
import { BannedWords } from './banWords.ts';
import { BannedUsers } from './bannedUsers.ts';
import { DisplaySettings } from './displaySetting.ts';

export type StorageKey = typeof STORAGE_KEY[keyof typeof STORAGE_KEY];

export type AllStorageData = {
  [STORAGE_KEY.DISPLAY_SETTINGS]: DisplaySettings;
  [STORAGE_KEY.BANNED_USERS]: BannedUsers;
  [STORAGE_KEY.BANNED_WORDS]: BannedWords;
};

export type StorageData = AllStorageData[keyof AllStorageData];
