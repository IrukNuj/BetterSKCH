import {
  BannedUsers,
  DISPLAY_SETTING_KEY_IS_FEMALE_HIDDEN,
  DISPLAY_SETTING_KEY_IS_MALE_HIDDEN,
  DISPLAY_SETTING_KEY_IS_NEKAMA_HIDDEN,
  DisplaySettingKey,
  DisplaySettings,
  Gender,
  GENDER_CATEGORY_TEXT_FEMALE,
  GENDER_CATEGORY_TEXT_MALE,
  GENDER_CATEGORY_TEXT_NEKAMA,
} from './types.ts';

export function genderToDisplaySetting(gender: Gender): DisplaySettingKey {
  switch (gender) {
    case GENDER_CATEGORY_TEXT_MALE:
      return DISPLAY_SETTING_KEY_IS_MALE_HIDDEN;
    case GENDER_CATEGORY_TEXT_FEMALE:
      return DISPLAY_SETTING_KEY_IS_FEMALE_HIDDEN;
    case GENDER_CATEGORY_TEXT_NEKAMA:
      return DISPLAY_SETTING_KEY_IS_NEKAMA_HIDDEN;
  }
}

export function displaySettingKeyToGender(
  displaySettingKey: DisplaySettingKey,
): Gender {
  switch (displaySettingKey) {
    case DISPLAY_SETTING_KEY_IS_MALE_HIDDEN:
      return GENDER_CATEGORY_TEXT_MALE;
    case DISPLAY_SETTING_KEY_IS_FEMALE_HIDDEN:
      return GENDER_CATEGORY_TEXT_FEMALE;
    case DISPLAY_SETTING_KEY_IS_NEKAMA_HIDDEN:
      return GENDER_CATEGORY_TEXT_NEKAMA;
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
const FEMALE_POSTS_QUERY_SELECTOR = 'gender2';
const NEKAMA_POSTS_QUERY_SELECTOR = 'gender3';
const ADS_QUERY_SELECTOR = '.ad';
const AUTOPAGERIZER_SELECTOR =
  '.autopagerize_page_separator, .autopagerize_link, .autopagerize_page_info';

export function filterPosts(
  displaySettings: DisplaySettings,
  bannedUserIds: BannedUsers,
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
}
