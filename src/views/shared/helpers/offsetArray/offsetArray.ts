export const offsetArray = <T>(array: T[], limit: number, offset: number): T[] => {
  const length = array.length;

  if (!length) {
    return array
  }

  if (offset > length - 1) {
    return array
  }

  const start = Math.min(length - 1, offset);
  const end = Math.min(length, offset + limit);

  return array.slice(start, end);
}
