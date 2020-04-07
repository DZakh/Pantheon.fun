import { elements } from '../utils/elements';

const { firstSection, mastheadElement } = elements;

const processMasthead = () => {
  const firstSectionHeight = firstSection.offsetHeight;
  const mastheadElementHeight = mastheadElement.offsetHeight;

  const scroll = document.body.scrollTop || document.documentElement.scrollTop;

  if (scroll > firstSectionHeight - mastheadElementHeight) {
    mastheadElement.classList.add('shown');
  } else {
    mastheadElement.classList.remove('shown');
  }
};

export const activateMasthead = () => {
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(processMasthead, 100);
  });
};