import { BannedWords } from '../type/banWords.ts';

/**
 * 一旦試験的に下記の単語を含む投稿を排除しています。
 * 需要があればユーザーが設定できるようにする予定です。
 *
 * また、banWordsリストの提案や編集を手伝ってくれる人を募集しています。
 * https://discordapp.com/users/1002897965758816277 までご連絡下さい。
 */

export const defaultBannedWords: BannedWords = [
  'ぺい',
  'pay',
  'ペイ',
  'ひまかまちょ',
  '金',
  'おな',
  '後',
  'ロック',
  '後',
  '動画',
  'どうが',
  'じょうけん',
  '条件',
  '貢',
  'えち',
];
