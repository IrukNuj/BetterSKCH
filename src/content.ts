import insertBanButton from './banButton.ts';
import { STORAGE_KEY } from './constants/storage.ts';
import insertPopupForm from './form.ts';
import { loadDataFromLocalStorage } from './storage.ts';
import { filterPosts } from './util.ts';

const ONE_LINE_COUNT = 3;

/**
 * autopagerizeのicon付与
 */
const replaceIcons = (post: Element) => {
  const icon = post.querySelector('img');
  const iconOriginalSrc = icon ? icon.getAttribute('data-original') : null;
  if (iconOriginalSrc && icon && icon.src !== iconOriginalSrc) {
    icon.setAttribute('src', iconOriginalSrc);
  }
};

/**
 * banButton付与
 */
const addBunButton = (post: Element) => {
  const userIdDocument = post.querySelector<HTMLInputElement>(
    'input[type=\'text\']',
  );
  const targetElement = post.querySelector('.post-header-line.skypeid');
  if (targetElement && userIdDocument) {
    insertBanButton(targetElement, userIdDocument.value);
  }
};
/**
 * css整理, 投稿を並べ直します
 * @param post
 * @param count
 *  mod(1~3)
 */
const replacePlacement = (post: Element, count: number) => {
  post.classList.remove('first', 'end');
  switch (count % ONE_LINE_COUNT) {
    case 0:
      post.classList.add('first');
      break;
    case 2:
      post.classList.add('end');
      break;
  }
};

const main = () => {
  const displaySettings = loadDataFromLocalStorage(
    STORAGE_KEY.DISPLAY_SETTINGS,
  );
  const bannedUserIds = loadDataFromLocalStorage(STORAGE_KEY.BANNED_USER);

  const posts = document.getElementById('posts');
  if (!posts) return;

  filterPosts(displaySettings, bannedUserIds, posts);

  // 残った投稿お掃除
  const filteredPostElements = document.querySelectorAll('.post');

  filteredPostElements.forEach((post, count) => {
    replaceIcons(post);
    addBunButton(post);
    replacePlacement(post, count);
  });
};

self.addEventListener('DOMContentLoaded', insertPopupForm);
self.addEventListener('DOMContentLoaded', main);
self.addEventListener('GM_AutoPagerizeNextPageLoaded', main);
