import insertBanButton from './banButton.ts';
import insertPopupForm from './form.ts';
import {
  BANNED_USER_STORAGE_KEY,
  DISPLAY_SETTINGS_STORAGE_KEY,
  loadDataFromLocalStorage,
} from './storage.ts';
import { removeBannedUserPosts, removeElements } from './util.ts';

const ONE_LINE_COUNT = 3;
const AUTOPAGERIZER_SELECTOR =
  '.autopagerize_page_separator, .autopagerize_link, .autopagerize_page_info';

const main = () => {
  const displaySettings = loadDataFromLocalStorage(
    DISPLAY_SETTINGS_STORAGE_KEY,
  );
  const bannedUserIds = loadDataFromLocalStorage(BANNED_USER_STORAGE_KEY);

  const posts = document.getElementById('posts');
  if (!posts) {
    console.info('postsみつかんないよ～；；');
    return;
  }

  const { isMaleHidden, isFemaleHidden, isNekamaHidden } = displaySettings;
  if (isMaleHidden) removeElements(posts.querySelectorAll('.gender1')); //https://developer.hatenastaff.com/entry/2020/12/12/121212
  if (isFemaleHidden) removeElements(posts.querySelectorAll('.gender2'));
  if (isNekamaHidden) removeElements(posts.querySelectorAll('.gender3'));
  removeElements(posts.querySelectorAll('.ad'));
  removeElements(posts.querySelectorAll(AUTOPAGERIZER_SELECTOR));

  if (bannedUserIds.length !== 0) {
    const bannedUserSelector = bannedUserIds.map(
      (v) => `input[value='${v}']`,
    ).join(',');
    removeBannedUserPosts(posts.querySelectorAll(bannedUserSelector));
  }

  // 残った投稿お掃除
  const filteredPostElements = document.querySelectorAll('.post');
  filteredPostElements.forEach((post, count) => {
    // autopagerizeのicon付与
    const icon = post.querySelector('img');
    const iconOriginalSrc = icon ? icon.getAttribute('data-original') : null;
    if (iconOriginalSrc && icon && icon.src !== iconOriginalSrc) {
      icon.setAttribute('src', iconOriginalSrc);
    }

    // banButton
    const userIdDocument = post.querySelector<HTMLInputElement>(
      'input[type=\'text\']',
    );
    const targetElement = post.querySelector('.post-header-line.skypeid');
    if (targetElement && userIdDocument) {
      insertBanButton(targetElement, userIdDocument.value);
    }

    // css整理
    post.classList.remove('first', 'end');
    switch (count % ONE_LINE_COUNT) {
      case 0:
        post.classList.add('first');
        break;
      case 2:
        post.classList.add('end');
        break;
    }
  });
};

self.addEventListener('DOMContentLoaded', insertPopupForm);
self.addEventListener('DOMContentLoaded', main);
self.addEventListener('GM_AutoPagerizeNextPageLoaded', main);
