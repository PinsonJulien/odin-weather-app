import NonVoidElement from "../non-void-element";

export type FontVariationSettings = {
  fill?: boolean;
  weight?: number;
  grade?: number;
  opticalSize?: number;
}

export default class Icon extends NonVoidElement<HTMLSpanElement> {
  constructor(
    iconName: string,
    fontVariationSettings?: FontVariationSettings,
  ) {
    super(
      document.createElement('span'),
      {
        classes: ['material-symbols-rounded']
      }
    );

    this.root.textContent = iconName;

    if (fontVariationSettings) {
      this.root.style.fontVariationSettings = `
        'FILL' ${fontVariationSettings.fill || 0}, 
        'wght' ${fontVariationSettings.weight || 100},
        'GRAD' ${fontVariationSettings.grade || 0},
        'opsz' ${fontVariationSettings.opticalSize || 20}
      `;
    }
  }
}