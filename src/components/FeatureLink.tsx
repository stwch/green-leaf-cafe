import BgImageLikeBox from '@components/BgImageLikeBox';
import NextArrowSVG from '@components/svg/NextArrowSVG';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import type { ComponentProps } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  linkLabel: string;
}
export default function FeatureLink({
  className,
  alt,
  src,
  href,
  linkLabel,
  imgClassName,
}: Props & Omit<ComponentProps<typeof BgImageLikeBox>, 'boxClassName'>) {
  return (
    <BgImageLikeBox
      as="a"
      href={href}
      alt={alt}
      src={src}
      imgClassName={imgClassName}
      boxClassName={cx(
        className,
        css({
          d: 'block',
          w: '100%',
          aspectRatio: '16/9',
        }),
      )}>
      <span
        className={cx(
          fontCVA({ link: 'feature' }),
          css({
            d: 'grid',
            gridTemplateColumns: 'repeat(2, auto)',
            alignItems: 'center',
            w: 'fit-content',
            radius: '100px 0 0 0',
            pd: '.5rem .5rem 0 1rem',
            bgColor: '{colors.base}',
            bt: '2px solid {colors.main}',
            bl: '2px solid {colors.main}',
            pos: 'absolute',
            right: '0',
            bottom: '0',
            zIndex: '2',
          }),
        )}>
        {linkLabel}
        <NextArrowSVG className={css({ w: '1.25rem' })} />
      </span>
    </BgImageLikeBox>
  );
}
