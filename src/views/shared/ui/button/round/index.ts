import buttonRoundTemplate from './button-round.twig';

export { buttonRoundTemplate };

export class ButtonRoundControl {
  private readonly parent: HTMLElement;

  private readonly parentClass = 'button-round' as const;
  private readonly classes = {
    parent: this.parentClass,
  } as const;

  constructor(parent: HTMLElement) {
    this.parent = parent;
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
