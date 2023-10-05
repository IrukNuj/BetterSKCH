import { BannedWords } from '../type/banWords.ts';

const isDev = false;
const adminBannedWords: BannedWords = [
  '依存',
  'valorant',
  'FF14',
  'LOL',
  'LoL',
  'lol',
  '原神',
  '晒し',
  '自己紹介',
  '返信',
  'こうかん',
  '交換',
  'へんしん',
  // '寝落ち',
  '年齢',
  'ねんれい',
  '挨拶',
  'あいさつ',
  '会議',
  'マッチョ',
];
const allBannedWords: BannedWords = [
  'ぺい',
  'pay',
  'Pay',
  'ペイ',
  'ぺぃ',
  // ...etc
  'お金',
  'おな',
  'ona',
  'ONA',
  'おna',
  'ロック',
  '後',
  '動画',
  'どうが',
  'どーが',
  'ぃぷ',
  'じょうけん',
  '条件',
  '貢',
  'えち',
  '理解',
  'カメラ',
  '稼',
  'かって',
  '買って',
  'ビデオ',
  'ビデ',
  // 'タグ',
  'BAN',
  '都内',
  '関東',
  '都度',
  '都合',
  '戦利品',
  'やりとり',
  'やり取り',
  '先払',
  '円欲',
  'えん欲',
  'リピ',
  'リピーター',
  'http',
  'live',
  '投稿',
  '助けて',
  'たすけて',
  'ごはんだい',
  'ごはん代',
  'ご飯代',
  'たばこだい',
  'たばこ代',
  'タバコ代',
  'ひやかし',
  '冷やかし',
  'お礼',
  'おれい',
  '詐欺',
  '00',
  'おかね',
  '男の娘',
  'おとこの娘',
  'お小遣い',
  'おこづかい',
  'おこずかい',
];

// deno-lint-ignore ban-ts-comment
// @ts-ignore
export const defaultBannedWords: BannedWords = isDev
  ? allBannedWords.concat(adminBannedWords)
  : [];
