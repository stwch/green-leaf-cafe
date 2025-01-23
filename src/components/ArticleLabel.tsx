import { css, cx } from '@styled-system/css';
import { colorCVA } from '@styles/colorCVA';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'span'> {
  color?: string;
}
export default function ArticleLabel({ className, children, color }: Props) {
  const colorName = color ?? 'main';
  const textColorName = colorName === 'main' ? null : 'base';
  return (
    <span
      className={cx(
        className,
        fontCVA({ link: 'article' }),
        colorCVA({ [colorName]: 'bg' }),
        textColorName && colorCVA({ [textColorName]: 'color' }),
        css({
          d: 'block',
          pd: '.375rem .5rem .25rem .5rem',
          pointerEvents: 'none',
        }),
      )}>
      {children}
    </span>
  );
}
