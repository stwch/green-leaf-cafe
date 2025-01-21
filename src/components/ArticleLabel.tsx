import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'span'> {
  isThin?: boolean;
}
export default function ArticleLabel({ className, children }: Props) {
  return (
    <span
      className={cx(
        className,
        fontCVA({ link: 'article' }),
        css({
          d: 'block',
          pd: '.375rem .5rem .25rem .5rem',
          bgColor: '{colors.main}',
          pointerEvents: 'none',
        }),
      )}>
      {children}
    </span>
  );
}
