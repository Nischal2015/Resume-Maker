import { NAME_FONT, HEADING_FONT, BODY_FONT } from '../data/font';
import { sizeCalcForPdf } from './fontCalc';

export const style = (width: number) => ({
  name: {
    fontSize: sizeCalcForPdf(width, NAME_FONT),
    lineHeight: '0.5',
  },
  heading: {
    fontSize: sizeCalcForPdf(width, HEADING_FONT),
    lineHeight: '1',
    marginBottom: '2.5mm',
    color: 'rgb(107 114 128)',
  },
  body: {
    fontSize: sizeCalcForPdf(width, BODY_FONT),
    lineHeight: '1',
    color: 'rgb(31 41 55)',
    marginBottom: sizeCalcForPdf(width, 0.5),
  },
  nameBody: { fontSize: sizeCalcForPdf(width, BODY_FONT), lineHeight: '1' },
  resumeSection: {
    paddingBottom: sizeCalcForPdf(width, 2.5),
    borderBottom: '1px solid rgba(209, 213, 219, 0.5)',
  },
  left: {
    rowGap: '3mm',
  },
});
