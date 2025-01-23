import { css, cx } from '@styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'a'> {}
export default function MoreArticleLink({ href, className }: Props) {
  return (
    <a
      href="#"
      className={cx(
        className,
        css({
          d: 'block',
          fontFamily: 'GenJyuuGoXP-M',
          w: 'fit-content',
          pd: '.5rem 1rem',
          color: '{colors.base}',
          bgColor: '{colors.main}',
          radius: '100px',
          mx: 'auto',
          boxShadow: '{shadows.btn}',
        }),
      )}>
      他の記事も見てみる
    </a>
  );
}
