import {
  BannedUsers,
  defaultBannedUsers,
  defaultDisplaySettings,
  DisplaySettingKey,
  DisplaySettings,
} from './types.ts';

type StorageKey = 'displaySettings' | 'bannedUsers';
type StorageData = DisplaySettings | BannedUsers;
type AllStorageData = {
  'displaySettings': DisplaySettings;
  'bannedUsers': BannedUsers;
};

const storageKeyToDefaultData = (key: StorageKey): StorageData => {
  switch (key) {
    case 'displaySettings':
      return defaultDisplaySettings;
    case 'bannedUsers':
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
