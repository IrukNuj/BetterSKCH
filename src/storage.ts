import {
  BannedUsers,
  defaultBannedUsers,
  defaultDisplaySettings,
  DisplaySettingKey,
  DisplaySettings,
} from './types.ts';

export const DISPLAY_SETTINGS_STORAGE_KEY = 'displaySettings';
export const BANNED_USER_STORAGE_KEY = 'bannedUsers';

type StorageKey =
  | typeof DISPLAY_SETTINGS_STORAGE_KEY
  | typeof BANNED_USER_STORAGE_KEY;
type StorageData = DisplaySettings | BannedUsers;
type AllStorageData = {
  [DISPLAY_SETTINGS_STORAGE_KEY]: DisplaySettings;
  [BANNED_USER_STORAGE_KEY]: BannedUsers;
};
const storageKeyToDefaultData = (key: StorageKey): StorageData | null => {
  switch (key) {
    case DISPLAY_SETTINGS_STORAGE_KEY:
      return defaultDisplaySettings;
    case BANNED_USER_STORAGE_KEY:
      return defaultBannedUsers;
  }
};

export function selectedDisPlaySettingKeysToStorageData(
  keys: DisplaySettingKey[],
): DisplaySettings {
  const data = defaultDisplaySettings;
  keys.forEach((e) => data[e] = true);
  return data;
}

export function loadDataFromLocalStorage<T extends StorageKey>(
  key: T,
): AllStorageData[T] {
  console.log('key:', key);
  const data = localStorage.getItem(key);
  console.log('loadData:', data);
  return data ? JSON.parse(data) : storageKeyToDefaultData(key);
}

export function saveDataToLocalStorage<T extends StorageData>(
  key: StorageKey,
  data: T,
) {
  console.log('key:', key);
  localStorage.setItem(key, JSON.stringify(data));
  console.log('savedData:', data);
}
