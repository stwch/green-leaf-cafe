import { cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import { spaceCVA } from '@styles/spaceCVA';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  title: string;
}
export default function ArticleSection({ title, className, children }: Props) {
  return (
    <section className={cx(className, spaceCVA({ row: 'section', inner: 'x' }))}>
      <h2 className={cx(fontCVA({ title: 'articleSection' }), spaceCVA({ row: 'blogBody' }))}>{title}</h2>
      {children}
    </section>
  );
}
