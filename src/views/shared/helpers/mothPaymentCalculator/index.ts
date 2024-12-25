/**
 * Функция рассчитывает аннуитетный платеж в месяц
 * @param {number=} credit - Остаточная стоимость кредита (полная стоимость минус первоначальный взнос)
 * @param {number=} percent - Ставка (4%)
 * @param {number=} months - Срок кредита в месяцах (72 месяца)
 */
export const monthPaymentCalculator = (credit: number = 0, percent: number = 1, months: number = 12): number => {
  if (typeof credit === 'number' && typeof percent === 'number' && typeof months === 'number') {
    return (credit * percent / (12 * 100)) / (1 - Math.pow(1 + (percent / (12 * 100)), (months * -1)));
  }

  return 0;
}
