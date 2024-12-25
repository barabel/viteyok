export class Footer {
  private readonly parent: HTMLElement;

  private readonly parentClass = 'footer' as const;
  private readonly classes = {
    parent: this.parentClass,
  } as const;

  constructor(parent: HTMLElement) {
    this.parent = parent;
  }
}
