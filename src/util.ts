import {
  DISPLAY_SETTING_KEY_IS_FEMALE_HIDDEN,
  DISPLAY_SETTING_KEY_IS_MALE_HIDDEN,
  DISPLAY_SETTING_KEY_IS_NEKAMA_HIDDEN,
  DisplaySettingKey,
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

export function removeElements(elements?: NodeListOf<Element>): void {
  if (elements) elements.forEach((e) => e.remove());
}

export function removeBannedUserPosts(
  bannedUserIdNodes?: NodeListOf<Element>,
) {
  if (!bannedUserIdNodes) return;
  bannedUserIdNodes.forEach((e) => {
    const bannedUserPost = e.parentNode?.parentElement?.parentElement
      ?.parentElement;
    if (bannedUserPost) bannedUserPost.remove();
  });
}

// export function removeFilteredGenderPosts(
//   elements: NodeListOf<Element>,
//   displaySettings: DisplaySettings,
// ): void {
//   (Object.keys(displaySettings) as DisplaySettingKeys).forEach((e) => {
//     switch (e as DisplaySettingKey) {
//       case 'isMaleHidden':
//         return;
//       case 'isFemaleHidden':
//         return;
//       case 'isNekamaHidden':
//         return;
//     }
//   });
// }
