export const sizeCalcForPdf = (width: number, font: number) => {
  return `${(width / 793.7) * font}mm`;
};
