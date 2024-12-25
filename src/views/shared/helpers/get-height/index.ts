/**
 * Функция возращает размер шапки
 */
export const getHeaderHeight = (): number => {
  const header = document.querySelector<HTMLElement>('.header');
  if (header) {
    return header.getBoundingClientRect().height;
  }

  return 0;
}

/**
 * Функция возращает размер блока с хлебными крошками
 */
export const getBreadCrumbsHeight = (): number => {
  const breadcrumbs = document.querySelector<HTMLElement>('.breadcrumbs');
  if (breadcrumbs) {
    return breadcrumbs.getBoundingClientRect().height;
  }

  return 0;
}
