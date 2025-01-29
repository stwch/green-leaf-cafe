import BgImageLikeBox from '@components/BgImageLikeBox';
import { css, cx } from '@styled-system/css';
import type { ComponentProps } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'div'> {}
export default function ArticleImage({
  className,
  imgClassName,
  src,
  alt,
}: Props & Omit<ComponentProps<typeof BgImageLikeBox>, 'boxClassName'>) {
  return (
    <BgImageLikeBox
      boxClassName={cx(
        className,
        css({
          aspectRatio: '16/9',
          radius: '4px',
          my: '{spacing.row.blog.object}',
        }),
      )}
      src={src}
      alt={alt}
      imgClassName={imgClassName}
    />
  );
}
