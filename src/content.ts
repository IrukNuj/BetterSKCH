import insertBanButton from './banButton.ts';
import insertPopupForm from './form.ts';
import { loadDataFromLocalStorage } from './storage.ts';

const ONE_LINE_COUNT = 3;
const AUTOPAGERIZER_SELECTOR =
  '.autopagerize_page_separator, .autopagerize_link, .autopagerize_page_info';

const removeElements = (elements: NodeListOf<Element>): void => {
  elements.forEach((e) => e.remove());
};

const removeBannedUserPosts = (
  bannedUserIdNodes: NodeListOf<Element>,
) => {
  bannedUserIdNodes.forEach((e) => {
    const bannedUserPost = e.parentNode?.parentElement?.parentElement
      ?.parentElement;
    if (bannedUserPost) bannedUserPost.remove();
  });
};

const displaySettings = loadDataFromLocalStorage('displaySettings');
const bannedUserIds = loadDataFromLocalStorage('bannedUsers');

const main = (): void => {
  const posts = document.getElementById('posts');
  if (!posts) return;

  const bannedUserSelector = bannedUserIds.map(
    (v) => `input[value='${v}']`,
  ).join(',');
  const bannedUserIdNodes = posts.querySelectorAll(
    bannedUserSelector,
  );

  const { isMaleHidden, isFemaleHidden, isNekamaHidden } = displaySettings;
  const malePosts = posts.querySelectorAll('.gender1'); //https://developer.hatenastaff.com/entry/2020/12/12/121212
  const femalePosts = posts.querySelectorAll('.gender2');
  const nekamaPosts = posts.querySelectorAll('.gender3');
  const autopagerizeSeparator = posts.querySelectorAll(AUTOPAGERIZER_SELECTOR);
  const ads = posts.querySelectorAll('.ad');

  if (isMaleHidden) removeElements(malePosts);
  if (isFemaleHidden) removeElements(femalePosts);
  if (isNekamaHidden) removeElements(nekamaPosts);
  removeBannedUserPosts(bannedUserIdNodes);
  removeElements(ads);
  removeElements(autopagerizeSeparator);

  // 残った投稿お掃除
  const filteredPostElements = document.querySelectorAll('.post');
  filteredPostElements.forEach((e, count) => {
    // autopagerizeのicon付与
    const icon = e.querySelector('img');
    const iconOriginalSrc = icon ? icon.getAttribute('data-original') : null;
    if (iconOriginalSrc && icon) icon.setAttribute('src', iconOriginalSrc);

    // banButton
    const userIdDocument: HTMLInputElement | null = e.querySelector(
      'input[type=\'text\']',
    );
    const targetElement = e.querySelector(
      '.post-header-line.skypeid',
    );
    if (targetElement && userIdDocument) {
      insertBanButton(targetElement, userIdDocument.value);
    }

    // css整理
    e.classList.remove('first', 'end');
    switch (count % ONE_LINE_COUNT) {
      case 0:
        e.classList.add('first');
        break;
      case 2:
        e.classList.add('end');
        break;
    }
  });
};

self.addEventListener('load', insertPopupForm);
self.addEventListener('load', main);
self.addEventListener('GM_AutoPagerizeNextPageLoaded', main);
