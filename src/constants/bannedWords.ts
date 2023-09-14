import { BannedWords } from '../type/banWords.ts';

/**
 * 不適切な投稿を取り除くため、試験的に下記(一部のみ記載)の単語を含む投稿を削除する機能を追加しました。
 * 需要があればユーザーが設定できるようにする予定です。
 *
 * また、banWordsリストの提案や編集を手伝ってくれる人を募集しています。
 * https://discordapp.com/users/1002897965758816277 までご連絡下さい。
 */

/**
 * 今回のアップデートで対応しきれていない、不適切、不愉快な投稿があればワードリストの更新のためにご連絡頂けますと幸いです。
 * 下記のフォーマットでご連絡頂けると助かります。
 *
 * url: [該当投稿のURL]
 * reason: [理由], [内容]
 */

/**
 * In order to remove inappropriate posts, we have added the ability to remove posts that contain the following (only some of the words listed) on a trial basis.
 * We plan to allow users to set this if there is demand.
 *
 * We are also looking for people to help suggest and edit banWords listings.
 * Please contact us at https://discordapp.com/users/1002897965758816277.
 */

/**
 * If you have any inappropriate or objectionable postings that have not been addressed in this update, we would appreciate it if you could contact us to update the word list.
 * It would be helpful if you could contact us in the following format.
 *
 * url: [URL of the corresponding post]
 * reason: [reason], [content].
 */

export const defaultBannedWords: BannedWords = [
  'ぺい',
  'pay',
  'ペイ',
  // ...etc
  'お金',
  'おな',
  'ona',
  'おna',
  'ロック',
  '後',
  '動画',
  'どうが',
  'どーが',
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
  'タグ',
];
