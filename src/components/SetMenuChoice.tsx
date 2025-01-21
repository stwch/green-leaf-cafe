import BgImageLikeBox from '@components/BgImageLikeBox';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import type { ComponentProps } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
}
export default function SetMenuChoice({
  as,
  src,
  alt,
  label,
  className,
}: Omit<ComponentProps<typeof BgImageLikeBox>, 'boxClassName'> & Props) {
  return (
    <BgImageLikeBox
      as={as}
      alt={alt}
      src={src}
      className={className}
      boxClassName={css({
        aspectRatio: '1/1',
        radius: '4px',
        bo: '1px solid {colors.base}',
      })}>
      <p
        className={cx(
          fontCVA({ label: 'setMenuChoice' }),
          css({
            pos: 'absolute',
            top: '0',
            left: '0',
            zIndex: '1',
            radius: '0 0 100px 0',
            bgColor: '{colors.base}',
            color: '{colors.text}',
            pd: '.125rem .625rem .25rem .25rem',
          }),
        )}>
        {label}
      </p>
    </BgImageLikeBox>
  );
}
