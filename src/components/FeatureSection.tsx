import SectionTitle from '@components/SectionTitle';
import { css, cx } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';
import type { ComponentProps } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  title: string;
  withLeaf?: boolean;
}
export default function FeatureSection({
  title,
  isJP,
  isMix,
  children,
  className,
  withLeaf,
}: Props & ComponentProps<typeof SectionTitle>) {
  return (
    <section className={cx(className)}>
      <SectionTitle
        isJP={isJP}
        isMix={isMix}
        withLeaf={withLeaf ?? true}
        className={cx(
          spaceCVA({ inner: 'x' }),
          css({
            mb: '{spacing.row.body}',
          }),
        )}>
        {title}
      </SectionTitle>
      {children}
    </section>
  );
}
