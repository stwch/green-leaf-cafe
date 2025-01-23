import { cva } from '@styled-system/css';

const main = '{colors.main}';
const brown = '{colors.brown}';
const base = '{colors.base}';

export const colorCVA = cva({
  variants: {
    main: {
      bg: { bgColor: main },
      bo1px: { bo: `1px solid ${main}` },
    },
    brown: {
      bg: { bgColor: brown },
      bo1px: { bo: `1px solid ${brown}` },
    },
    base: {
      color: { color: base },
    },
  },
});
