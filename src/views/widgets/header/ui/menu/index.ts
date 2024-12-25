export class HeaderMenu {
  private readonly parent: HTMLElement;

  private readonly parentClass = 'header-menu' as const;
  private readonly classes = {
    parent: this.parentClass,
  } as const;

  constructor(parent: HTMLElement) {
    this.parent = parent;
  }
}
