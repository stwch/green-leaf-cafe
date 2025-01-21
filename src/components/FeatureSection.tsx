import SectionTitle from '@components/SectionTitle';
import { css, cx } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';
import type { ComponentProps } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  title: string;
  withLeaf?: boolean;
  bodyClassName?: string;
}
export default function FeatureSection({
  title,
  isJP,
  children,
  className,
  withLeaf,
  bodyClassName,
}: Props & ComponentProps<typeof SectionTitle>) {
  return (
    <section className={cx(className)}>
      <SectionTitle
        isJP={isJP}
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
