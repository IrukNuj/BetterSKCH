import { loadDataFromLocalStorage, saveDataToLocalStorage } from './storage.ts';
import { attachBanButtonStyle } from './style.ts';
import { UserId } from './types.ts';

const USER_BAN_BUTTON_ID = 'extension-button-user-ban';

const createBanButton = (userId: UserId) => {
  const banButton = document.createElement('button');
  banButton.type = 'button';
  banButton.id = USER_BAN_BUTTON_ID;
  banButton.name = 'user-ban';
  banButton.className = 'user-ban-button';
  banButton.innerText = 'ブロック';
  attachBanButtonStyle(banButton);

  banButton.addEventListener('click', () => {
    const isAlreadyBlocked = banButton.classList.contains('blocked');
    const bannedUserPost = banButton.parentElement?.parentElement
      ?.parentElement;
    const storageData = loadDataFromLocalStorage('bannedUsers');

    if (isAlreadyBlocked) {
      banButton.classList.remove('blocked');
      banButton.innerText = 'ブロック';
      const unBlockedData = new Set(storageData);
      unBlockedData.delete(userId);
      saveDataToLocalStorage('bannedUsers', [...unBlockedData]);

      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      if (bannedUserPost) {
        bannedUserPost.style.opacity = '1.0';
      }
    } else {
      banButton.classList.add('blocked');
      banButton.innerText = 'ブロック解除';
      if (!storageData.includes(userId)) {
        const blockedData = new Set(storageData);
        blockedData.add(userId);
        saveDataToLocalStorage('bannedUsers', [...blockedData]);
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

const insertBanButton = (targetElement: Element, userId: UserId) => {
  const banButton = createBanButton(userId);
  targetElement.insertAdjacentElement('beforebegin', banButton);
};

export default insertBanButton;
