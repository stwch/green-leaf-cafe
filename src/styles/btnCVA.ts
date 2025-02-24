import { cva } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

const eventFormBtnBaseStyles: SystemStyleObject = {
  fontFamily: 'GenJyuuGoXP-M',
  d: 'block',
  w: 'fit-content',
  pd: '.5rem 1rem',
  radius: '100px',
  boxShadow: '{shadows.btn}',
};

export const btnCVA = cva({
  variants: {
    eventForm: {
      submit: {
        ...eventFormBtnBaseStyles,
        color: '{colors.base}',
        textShadow: '{shadows.text.accent}',
        bgColor: '{colors.accent}',
      },
      submitCheck: {
        ...eventFormBtnBaseStyles,
        color: '{colors.base}',
        textShadow: '{shadows.text.accent}',
        bgColor: '{colors.accent}',
      },
      submitCancel: {
        ...eventFormBtnBaseStyles,
        bgColor: '{colors.base}',
      },
    },
  },
});
