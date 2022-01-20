/* eslint-disable no-param-reassign */
import placeholderImg from 'app/../assets/images/placeholder.jpg';

export const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const onImageError = (event, fallbackSrc = placeholderImg) => {
  event.target.onerror = null;
  event.target.src = fallbackSrc;
};

export const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');

        img.setAttribute('src', src);

        img.onload = () => {
          img.removeAttribute('data-src');
        };

        observer.disconnect();
      }
    });
  });
  io.observe(target);
};

export const breakPoints3 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
];

export const convertToObject = array => {
  const obj = Object.fromEntries(
    array.map(key => {
      return [key, { checked: false }];
    }),
  );
  return obj;
};
