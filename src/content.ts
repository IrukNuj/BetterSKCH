import insertPopupForm from './form.ts';

const ONE_LINE_COUNT = 3;

const removeElements = (elements: NodeListOf<HTMLElement>): void => {
  elements.forEach((e) => e.remove());
};

const form = chrome.runtime.getURL('../public/form.html');

const main = (): void => {
  const malePosts = document.querySelectorAll<HTMLElement>('.gender1'); //https://developer.hatenastaff.com/entry/2020/12/12/121212
  // const femalePosts = document.querySelectorAll<HTMLElement>('.gender2');
  const nekamaPosts = document.querySelectorAll<HTMLElement>('.gender3');

  const autopagerizePageSeparator = document.querySelectorAll<HTMLElement>(
    '.autopagerize_page_separator, .autopagerize_link, .autopagerize_page_info',
  );
  const ads = document.querySelectorAll<HTMLElement>('.ad');

  // chrome.storage.local.get(
  //   ['isRemoveMale', 'isRemoveFemale', 'isRemoveNekama'],
  //   (values) => {
  //     console.log(values);
  //     if (values.isRemoveMale) removeElements(malePosts);
  //     if (values.isRemoveFemale) removeElements(femalePosts);
  //     if (values.isRemoveNekama) removeElements(nekamaPosts);
  //   },
  // );

  removeElements(malePosts);
  // if (values.isRemoveFemale) removeElements(femalePosts);
  removeElements(nekamaPosts);

  removeElements(ads);
  removeElements(autopagerizePageSeparator);

  const formedPosts = document.querySelectorAll<HTMLElement>('.post');

  formedPosts.forEach((e, count) => {
    const icon = e.querySelector('img');
    const iconOriginalSrc = icon ? icon.getAttribute('data-original') : '';
    if (iconOriginalSrc) icon?.setAttribute('src', iconOriginalSrc);

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
};

self.addEventListener('load', insertPopupForm);
self.addEventListener('load', main);
self.addEventListener('GM_AutoPagerizeNextPageLoaded', main);
