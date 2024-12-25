/**
 * Функция имитирует toFixed, только возращает число
 * @param {number} num - число, которое необходимо преобразовать
 * @param {number} digits - количество чисел после запятой
 * @param {number=} base - система исчисления, по-умолчанию десятичная
 */
export const toFixedNumber = (num: number, digits: number, base?: number): number => {
  const pow = Math.pow(base ?? 10, digits);

  return Math.round(num * pow) / pow;
}
