export class Header {
  private readonly parentClass = 'header' as const;
  private readonly classes = {
    parent: `${this.parentClass}`,
  } as const;

  constructor(parent: HTMLElement) {
  }
}
