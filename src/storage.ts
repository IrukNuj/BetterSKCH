import { defaultBannedUsers } from './constants/bannedUsers.ts';
import { defaultBannedWords } from './constants/bannedWords.ts';
import { defaultDisplaySettings } from './constants/displaySettings.ts';
import { STORAGE_KEY } from './constants/storage.ts';
import { DisplaySettingKey, DisplaySettings } from './type/displaySetting.ts';
import { AllStorageData, StorageData, StorageKey } from './type/storage.ts';

/**
 * 与えられたstorageKeyに対するdefaultDataを返す
 */
const storageKeyToDefaultData = (key: StorageKey): StorageData | null => {
  switch (key) {
    case STORAGE_KEY.DISPLAY_SETTINGS:
      return defaultDisplaySettings;
    case STORAGE_KEY.BANNED_USERS:
      return defaultBannedUsers;
    case STORAGE_KEY.BANNED_WORDS:
      return defaultBannedWords;
  }
};

/**
 * 受け取ったstorageKeyのみTrueになっているdisplaySettingsを返す
 */
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

// const unBanUser = (id) => {
//   const a = localStorage.getItem('bannedUsers');
//   if (a === null) return;
//   const c = JSON.parse(a).filter((b) => b !== id);
//   localStorage.setItem('bannedUsers', JSON.stringify(c));
// };

// unBanUser('ここにユーザーIDを入れる');
