import { GENDER_CATEGORY_TEXT } from '../constants/gender.ts';

export type Gender =
  typeof GENDER_CATEGORY_TEXT[keyof typeof GENDER_CATEGORY_TEXT];
