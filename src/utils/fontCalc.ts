export const sizeCalcForPdf = (width: number, font: number) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `${(width / 793.7) * font}mm`;
