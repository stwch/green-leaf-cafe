import BgImageLikeBox from '@components/BgImageLikeBox';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import type { ComponentProps } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'p'> {
  label: string;
  price: string;
}
export default function MenuCard({
  className,
  alt,
  src,
  label,
  price,
  children,
}: Props & Omit<ComponentProps<typeof BgImageLikeBox>, 'boxClassName'>) {
  return (
    <div
      className={cx(
        className,
        css({
          d: 'grid',
          gridTemplateRows: 'auto 1fr',
          radius: '4px',
          overflow: 'hidden',
          bgColor: '{colors.brown}',
          h: '100%',
        }),
      )}>
      <BgImageLikeBox
        as="div"
        alt={alt}
        src={src}
        boxClassName={cx(
          fontCVA({ label: 'menu' }),
          css({
            aspectRatio: '1/1',
            bo: '1px solid {colors.brown}',
          }),
        )}>
        <p
          className={cx(
            css({
              color: '{colors.base}',
              textShadow: '{shadows.text.brown}',
              pos: 'absolute',
              top: '0',
              left: '0',
              zIndex: '1',
              bgColor: '{colors.brown}',
              pd: '.375rem 1rem .5rem .5rem',
              radius: '0 0 100px 0',
            }),
          )}>
          {label}
        </p>
        <p
          className={cx(
            css({
              color: '{colors.base}',
              textShadow: '{shadows.text.brown}',
              pos: 'absolute',
              bottom: '0',
              left: '0',
              zIndex: '1',
              bgColor: '{colors.brown}',
              pd: '.5rem 1rem 0 .5rem',
              radius: '0 100px 0 0',
            }),
          )}>
          {price}
        </p>
      </BgImageLikeBox>
      <p
        className={cx(
          fontCVA({ body: 'menu' }),
          css({
            alignSelf: 'stretch',
            mg: '{spacing.inner.x}',
            radius: '4px',
            pd: '.75rem .5rem',
            bgColor: '{colors.base}',
          }),
        )}>
        {children}
      </p>
    </div>
  );
}
