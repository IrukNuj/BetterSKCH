// chrome.runtime.onMessage.addListener((_message, _sender, sendResponse) => {
//   alert(`Hello Chrome Extension!\nThis page title : ${document.title}`);
//   sendResponse();
//   return true;
// });

const AD_SCRIPT_SRC =
  'https://adm.shinobi.jp/s/2aa1bd746a9c3f5d6208776028f3c934';

const ONE_LINE_COUNT = 3;

console.log('hello~!');

const removeElements = (elements: NodeListOf<HTMLElement>): void => {
  elements.forEach((e) => e.remove());
};

const main = (): void => {
  const malePosts = document.querySelectorAll<HTMLElement>('.gender1'); //https://developer.hatenastaff.com/entry/2020/12/12/121212
  removeElements(malePosts);

  const ads = document.querySelectorAll<HTMLElement>('.ad');
  removeElements(ads);

  const autopagerizePageSeparator = document.querySelectorAll<HTMLElement>(
    '.autopagerize_page_separator, .autopagerize_link, .autopagerize_page_info',
  );
  removeElements(autopagerizePageSeparator);

  const femalePosts = document.querySelectorAll<HTMLElement>(
    '.gender2, .gender3',
  );
  femalePosts.forEach((e, count) => {
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
  console.log(femalePosts);

  const posts = document.getElementById('posts');
  const newAd = document.createElement('script');

  newAd.src = AD_SCRIPT_SRC;
  newAd.type = 'text/javascript';
  newAd.async = true;
  posts?.appendChild<HTMLElement>(newAd);
};

self.addEventListener('load', main);
self.addEventListener('GM_AutoPagerizeNextPageLoaded', main);
