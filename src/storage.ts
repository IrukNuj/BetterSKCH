import { defaultBannedUsers } from './constants/bannedUsers.ts';
import { defaultDisplaySettings } from './constants/displaySettings.ts';
import { STORAGE_KEY } from './constants/storage.ts';
import { DisplaySettingKey, DisplaySettings } from './type/displaySetting.ts';
import { AllStorageData, StorageData, StorageKey } from './type/storage.ts';

const storageKeyToDefaultData = (key: StorageKey): StorageData | null => {
  switch (key) {
    case STORAGE_KEY.DISPLAY_SETTINGS:
      return defaultDisplaySettings;
    case STORAGE_KEY.BANNED_USER:
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
