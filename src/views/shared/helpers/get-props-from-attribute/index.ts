/**
 * Функция, которая забирает пропсы с элемента и возвращает пропарсенный объект
 */
export const getPropsFromAttribute = (element: HTMLElement): Record<string, any> => {
  const props = element.getAttribute('data-props');

  const parsedProps = JSON.parse(props ?? '{}');

  element.removeAttribute('data-props');

  return parsedProps ?? {};
}
