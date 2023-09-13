import { DISPLAY_SETTING_KEY } from './constants/displaySettings.ts';
import { GENDER_CATEGORY_TEXT } from './constants/gender.ts';
import { BannedWords } from './type/banWords.ts';
import { BannedUsers } from './type/bannedUsers.ts';
import { DisplaySettingKey, DisplaySettings } from './type/displaySetting.ts';
import { Gender } from './type/gender.ts';

/**
 * ex. "男性" -> "isMaleHidden"
 */
export function genderToDisplaySetting(gender: Gender): DisplaySettingKey {
  switch (gender) {
    case GENDER_CATEGORY_TEXT.MALE:
      return DISPLAY_SETTING_KEY.MALE;
    case GENDER_CATEGORY_TEXT.FEMALE:
      return DISPLAY_SETTING_KEY.FEMALE;
    case GENDER_CATEGORY_TEXT.NEKAMA:
      return DISPLAY_SETTING_KEY.NEKAMA;
  }
}

/**
 * ex. "isMaleHidden" -> "男性"
 */
export function displaySettingKeyToGender(
  displaySettingKey: DisplaySettingKey,
): Gender {
  switch (displaySettingKey) {
    case DISPLAY_SETTING_KEY.MALE:
      return GENDER_CATEGORY_TEXT.MALE;
    case DISPLAY_SETTING_KEY.FEMALE:
      return GENDER_CATEGORY_TEXT.FEMALE;
    case DISPLAY_SETTING_KEY.NEKAMA:
      return GENDER_CATEGORY_TEXT.NEKAMA;
  }
}

function removeElements(elements?: NodeListOf<Element>): void {
  if (elements) elements.forEach((e) => e.remove());
}

function removeBannedUserPosts(
  bannedUserIdNodes?: NodeListOf<Element>,
) {
  if (!bannedUserIdNodes) return;
  bannedUserIdNodes.forEach((e) => {
    const bannedUserPost = e.parentNode?.parentElement?.parentElement
      ?.parentElement;
    if (bannedUserPost) bannedUserPost.remove();
  });
}

const MALE_POSTS_QUERY_SELECTOR = '.gender1';
const FEMALE_POSTS_QUERY_SELECTOR = '.gender2';
const NEKAMA_POSTS_QUERY_SELECTOR = '.gender3';
const ADS_QUERY_SELECTOR = '.ad';
const AUTOPAGERIZER_SELECTOR =
  '.autopagerize_page_separator, .autopagerize_link, .autopagerize_page_info';

/**
 * filter項目: displaySetting, bannedUser, bannedWords, ad, autopagerizer
 */

export function filterPosts(
  displaySettings: DisplaySettings,
  bannedUserIds: BannedUsers,
  bannedWords: BannedWords,
  posts: HTMLElement,
) {
  const { isMaleHidden, isFemaleHidden, isNekamaHidden } = displaySettings;
  //https://developer.hatenastaff.com/entry/2020/12/12/121212
  if (isMaleHidden) {
    removeElements(posts.querySelectorAll(MALE_POSTS_QUERY_SELECTOR));
  }
  if (isFemaleHidden) {
    removeElements(posts.querySelectorAll(FEMALE_POSTS_QUERY_SELECTOR));
  }
  if (isNekamaHidden) {
    removeElements(posts.querySelectorAll(NEKAMA_POSTS_QUERY_SELECTOR));
  }
  removeElements(posts.querySelectorAll(ADS_QUERY_SELECTOR));
  removeElements(posts.querySelectorAll(AUTOPAGERIZER_SELECTOR));

  if (bannedUserIds.length !== 0) {
    const bannedUserSelector = bannedUserIds.map(
      (v) => `input[value='${v}']`,
    ).join(',');
    removeBannedUserPosts(posts.querySelectorAll(bannedUserSelector));
  }

  if (bannedWords.length !== 0) {
    const postsNodeList = posts.querySelectorAll('.post');
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    const bannedPosts = [];
    postsNodeList.forEach((post) => {
      const postTitle = post.querySelector('.post-title')?.textContent;
      const postText = post.querySelector('.post-body')?.textContent;
      const postContent = `${postTitle} ${postText}`;

      if (!postText) return;
      const isBanned = bannedWords.some((bannedWord) =>
        postContent.includes(bannedWord)
      );
      if (isBanned) bannedPosts.push(post);
      return;
    });
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    removeElements(bannedPosts as NodeListOf<Element>);
  }

  // deno-lint-ignore ban-ts-comment
  // @ts-ignore
  return posts as NodeListOf<Element>;
}
