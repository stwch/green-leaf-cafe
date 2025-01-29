import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'p'> {}
export default function ArticleBody({ className, children }: Props) {
  return (
    <p
      className={cx(
        className,
        fontCVA({ body: 'article' }),
        css({
          '&+&': { mt: '{spacing.row.blog.body}' },
        }),
      )}>
      {children}
    </p>
  );
}
