/**
 * Вернёт объект с URL текущей страницы и utm-меткой из sessionStrage (сохраняется функцией saveUTM).
 */
export const getUTMFromUrlWithCurrentPage = (): Record<string, string> => {
  let utm: Record<string, string> = {};
  try {
    utm = JSON.parse(sessionStorage.getItem('utm') ?? '{}');
  } catch (e) {
    console.error(e);
  }

  return {
    ...utm,
    page: window.location.href,
  };
};
