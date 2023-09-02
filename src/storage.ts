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
  displaySettingKeys: DisplaySettingKey[],
): DisplaySettings {
  const data = defaultDisplaySettings;
  displaySettingKeys.forEach((e) => data[e] = true);
  return data;
}

export function loadDataFromLocalStorage<T extends StorageKey>(
  storageKey: T,
): AllStorageData[T] {
  const data = localStorage.getItem(storageKey);
  return data ? JSON.parse(data) : storageKeyToDefaultData(storageKey);
}

export function saveDataToLocalStorage<T extends StorageData>(
  storageKey: StorageKey,
  data: T,
) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}
