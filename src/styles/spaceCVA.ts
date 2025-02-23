import { cva } from '@styled-system/css';

export const spaceCVA = cva({
  variants: {
    row: {
      section: { mb: { base: '{spacing.row.section}', tab: '{spacing.row.section.tab}' } },
      firstSection: {
        pt: { base: 'calc({spacing.row.section} + 0.75rem)', tab: 'calc({spacing.row.section.tab} + 0.75rem)' }, //
        mb: { base: '{spacing.row.section}', tab: '{spacing.row.section.tab}' },
      },
      firstSectionJP: {
        pt: { base: 'calc({spacing.row.section} + 1rem)', tab: 'calc({spacing.row.section.tab} + 1rem)' }, //
        mb: { base: '{spacing.row.section}', tab: '{spacing.row.section.tab}' },
      },
      body: { mb: '{spacing.row.body}' },
      object: { mb: '{spacing.row.body.object}' },
      blogBody: { mb: '{spacing.row.blog.body}' },
      blogObject: { mb: '{spacing.row.blog.object}' },
    },
    inner: {
      x: { px: '{spacing.inner.x}' },
    },
  },
});
