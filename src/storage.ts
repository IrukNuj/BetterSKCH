import { DisplaySettings } from './types.ts';

type StorageKeys = 'displaySettings';

const loadDataFromLocalStorage = (key: StorageKeys): DisplaySettings => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export default loadDataFromLocalStorage;
