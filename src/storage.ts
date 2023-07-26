import { defaultDisplaySettings, DisplaySettings } from './types.ts';

type StorageKeys = 'displaySettings';
// type StorageKeys = 'displaySettings' | 'SomeStorageKeys';
type StorageData = DisplaySettings;
// type StorageData = DisplaySettings | 'SomeStorageData';

export function loadDataFromLocalStorage(key: StorageKeys): DisplaySettings {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultDisplaySettings;
}

export function saveDataToLocalStorage(key: StorageKeys, data: StorageData) {
  localStorage.setItem(key, JSON.stringify(data));
}
