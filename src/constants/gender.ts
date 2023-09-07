import { Gender } from '../type/gender.ts';

export const GENDER_CATEGORY_TEXT = {
  MALE: '男性',
  FEMALE: '女性',
  NEKAMA: '不明',
} as const;

export const allGender: Gender[] = Object.values(GENDER_CATEGORY_TEXT);
