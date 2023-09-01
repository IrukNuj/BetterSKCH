import { defaultBannedUsers } from './constants/bannedUsers.ts';
import { defaultDisplaySettings } from './constants/displaySettings.ts';
import {
  BANNED_USER_STORAGE_KEY,
  DISPLAY_SETTINGS_STORAGE_KEY,
} from './constants/storage.ts';
import { DisplaySettingKey, DisplaySettings } from './type/displaySetting.ts';
import { AllStorageData, StorageData, StorageKey } from './type/storage.ts';

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
  // console.log('key:', key);
  const data = localStorage.getItem(key);
  // console.log('loadData:', data);
  return data ? JSON.parse(data) : storageKeyToDefaultData(key);
}

export function saveDataToLocalStorage<T extends StorageData>(
  key: StorageKey,
  data: T,
) {
  // console.log('key:', key);
  localStorage.setItem(key, JSON.stringify(data));
  // console.log('savedData:', data);
}
