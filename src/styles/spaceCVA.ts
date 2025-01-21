import { cva } from '@styled-system/css';

export const spaceCVA = cva({
  variants: {
    row: {
      section: { mb: { base: '{spacing.row.section}', tab: '{spacing.row.section.tab}' } },
      body: { mb: '{spacing.row.body}' },
      object: { mb: '{spacing.row.body.object}' },
    },
    inner: {
      x: { px: '{spacing.inner.x}' },
    },
  },
});
