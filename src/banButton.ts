import { BANNED_USER_STORAGE_KEY } from './constants/storage.ts';
import { loadDataFromLocalStorage, saveDataToLocalStorage } from './storage.ts';
import { attachBanButtonStyle } from './style.ts';
import { UserId } from './type/bannedUsers.ts';

const USER_BAN_BUTTON_ID = 'extension-button-user-ban';
const CLASS_NAME_BLOCKED = 'blocked';

const createBanButton = (userId: UserId) => {
  const banButton = document.createElement('button');
  const bannedUserPost = banButton.parentElement?.parentElement
    ?.parentElement;

  banButton.type = 'button';
  banButton.id = USER_BAN_BUTTON_ID;
  banButton.name = 'user-ban';
  banButton.className = 'user-ban-button';
  banButton.innerText = 'ブロック';
  attachBanButtonStyle(banButton);

  banButton.addEventListener('click', () => {
    const isAlreadyBlocked = banButton.classList.contains(CLASS_NAME_BLOCKED);
    const storageData = loadDataFromLocalStorage(BANNED_USER_STORAGE_KEY);
    const isStorageDataHasUserId = storageData.includes(userId);

    if (isAlreadyBlocked) {
      banButton.classList.remove(CLASS_NAME_BLOCKED);
      banButton.innerText = 'ブロック';
      banButton.style.background = '#dc3460';
      banButton.style.color = '#FFF';

      if (isStorageDataHasUserId) {
        const unBlockedData = new Set(storageData);
        unBlockedData.delete(userId);
        saveDataToLocalStorage(BANNED_USER_STORAGE_KEY, [...unBlockedData]);
      }
      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      if (bannedUserPost) {
        bannedUserPost.style.opacity = '1.0';
      }
    } else {
      banButton.classList.add(CLASS_NAME_BLOCKED);
      banButton.innerText = 'ブロック解除';
      banButton.style.background = '#FFF';
      banButton.style.color = '#dc3460';
      if (!isStorageDataHasUserId) {
        const blockedData = new Set(storageData);
        blockedData.add(userId);
        saveDataToLocalStorage(BANNED_USER_STORAGE_KEY, [...blockedData]);
      }

      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      if (bannedUserPost) {
        bannedUserPost.style.opacity = '0.3';
      }
    }
  });

  return banButton;
};

const insertBanButton = (
  targetElement: Element,
  userId: UserId,
) => {
  const banButton = createBanButton(userId);
  targetElement.insertAdjacentElement('beforebegin', banButton);
};

export default insertBanButton;
