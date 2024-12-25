/** Дополняет нулями вначале до 2 символов, для пагинации свайпера */
export function formatFraction(num: number): string {
  return (num >= 10)
    ? num.toString()
    : `0${num}`;
}
