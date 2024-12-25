import { type TIconId } from '@/shared/enums'

export interface IButton {
  url?: string
  title?: string
  icon?: TIconId
}

export class ButtonControl {
  private readonly parent: HTMLElement;
  private readonly titles: HTMLElement[];

  private readonly parentClass = 'button' as const;
  private readonly classes = {
    parent: this.parentClass,
    title: `${this.parentClass}__title`,
  } as const;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.titles = Array.from(this.parent.querySelectorAll<HTMLElement>(`.${this.classes.title}`));
  }

  public readonly getText = (): string => {
    if (this.titles.length) {
      return this.titles[0].innerHTML;
    }

    return '';
  }

  public readonly changeText = (text: string): void => {
    if (this.titles.length) {
      this.titles.forEach((content) => {
        content.innerHTML = text;
      });
    }
  }

  public readonly toggleAttention = (match: 'show' | 'hide'): void => {
    if (match === 'show') {
      this.parent.classList.add(`${this.classes.parent}--attention`);
    }

    if (match === 'hide') {
      this.parent.classList.remove(`${this.classes.parent}--attention`);
    }
  }
}
