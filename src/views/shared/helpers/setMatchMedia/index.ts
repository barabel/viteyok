import { MediaSizes } from '@/shared/enums';
import { type MediaSizesType, type IGetMediaQueryList, type TSetMatchMediaProps, type MediaQueryType } from './types';

const getMediaQueryList: IGetMediaQueryList['func'] = (mediaSize, type) => {
  const delimeter = type === 'min' ? 0 : 1;

  return window.matchMedia(`(${type}-width: ${MediaSizes[mediaSize] - delimeter}px)`);
}

/**
 * Устанавливает матч медиа на определенный медиасайз, вызывая калбак
 *
 * Можно использовать либо пропс min, либо пропс max
 *
 * Если использован min то будет min-width, если max, то будет max-width
 *
 * Пример
 *
 * setMatchMedia({
    min: 'DESKTOP',
    callback: () => {
      parent.classList.remove(classes.open);
    },
  })
 */
export const setMatchMedia = ({
  min,
  max,
  callback,
  executeCallback = true,
}: TSetMatchMediaProps): void => {
  const media: MediaSizesType = min ?? max;
  const type: MediaQueryType = min ? 'min' : 'max';

  const mediaQuery = getMediaQueryList(media, type);

  if (executeCallback) {
    callback(mediaQuery);
  }

  mediaQuery.addEventListener('change', callback);
}
