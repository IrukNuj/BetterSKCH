import { BannedWords } from '../type/banWords.ts';

/**
 * @[更新内容]
 *
 * 不適切な投稿を取り除くため、試験的に下記(一部のみ記載)の単語を含む投稿を削除する機能を追加しました。
 * 需要があればユーザーが設定できるようにする予定です。
 *
 * @[募集]
 *
 * banWordsリストの提案や編集を手伝ってくれる人を募集しています。
 * 特別求める条件などはなく、興味があれば
 * URL: https://discordapp.com/users/1002897965758816277
 * までご連絡下さい。
 *
 * また今回のアップデートで対応しきれていない、不適切、不愉快な投稿があればワードリストの更新のためにご連絡頂けますと幸いです。
 * 下記のフォーマットでご連絡頂けると助かります。
 *
 * url: [該当投稿のURL]
 * reason: [理由], [内容]
 *
 * 匿名での連絡を希望される場合は此方でも対応しています。(面倒であんまりみないかも)
 * URL: https://docs.google.com/forms/d/1iOxCW37bGS0qV2vztakbfigaCCs1SyKSZj8xmqpqCxY/viewform
 *
 * @[呟き]
 *
 * 暇だったら感想から質問まで気軽にください。もらえると喜びます。
 *
 * @[update]: en
 *
 * In order to remove inappropriate posts, we have added the function to remove posts that contain the following (only some of the words listed) on a trial basis.
 * I plan to allow users to set this if there is demand.
 *
 * @[wanted]: en
 *
 * We are also looking for people to help suggest and edit banWords listings.
 * No special requirements, if you are interested please contact us
 * at: https://discordapp.com/users/1002897965758816277
 * anonymity: https://docs.google.com/forms/d/1iOxCW37bGS0qV2vztakbfigaCCs1SyKSZj8xmqpqCxY/viewform
 *
 * If you saw any inappropriate or objectionable postings that have not been addressed in this update, we would appreciate it if you could contact us to update the word list.
 * It would be helpful if you could contact us in the following format.
 *
 * url: [URL of the corresponding post]
 * reason: [reason], [content].
 *
 * @[tweet]: en
 *
 * plz feel free to ask me anything from feedback to questions. I'll be glad :)
 */

export const defaultBannedWords: BannedWords = [
  'ぺい',
  'pay',
  'ペイ',
  'ぺぃ',
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
  // 'タグ',
  'BAN',
];
