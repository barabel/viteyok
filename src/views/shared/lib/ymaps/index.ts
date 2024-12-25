// @ts-expect-error: 7016
import ymaps from 'ymaps';

/**
 * Функция loadYmapsApi
 * @returns специальный объект, который загружает скрипты ymaps, если они не были загружены при вызове
 */
export const loadYmapsApi = async(): Promise<any> => {
  return await new Promise((resolve, reject) => {
    if (window.ymapsMap) {
      resolve(window.ymapsMap);
    } else {
      ymaps
        .load('https://api-maps.yandex.ru/2.1/?apikey=\'\'&lang=ru_RU')
        .then((map: any) => {
          window.ymapsMap = map;
          resolve(map);
        })
        .catch((err: any) => {
          reject(err);
          console.error(err);
        });
    }
  });
};
