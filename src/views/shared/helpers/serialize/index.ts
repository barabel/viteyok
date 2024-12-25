/**
 * Функция serialize-преобразование обьектов в строку для передачи в запросах
 * @param obj {Object} объект или массив для сериализации
 * @param prefix {string} для описания конечного параметра запроса
 * @returns преобразованный обьект в скроку с соединением &
 */
export const serialize = (obj: Record<string, any>, prefix?: string): string => {
  const str = [];
  let p;
  for (p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      const k = prefix ? prefix + '[' + p + ']' : p;
      const v = obj[p];
      str.push((v !== null && typeof v === 'object') ? serialize(v, k) : encodeURIComponent(k) + '=' + encodeURIComponent(v));
    }
  }
  return str.join('&');
}
