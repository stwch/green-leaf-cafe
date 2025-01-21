import { css, cx } from '@styled-system/css';
import Image from 'next/image';
import type { ComponentProps, ComponentPropsWithoutRef, ElementType } from 'react';

type Props<T extends ElementType> = Omit<ComponentPropsWithoutRef<T>, 'className' | 'as'> & {
  as?: T;
  boxClassName: string; //height かaspectRatio の指定が必要
  imgClassName?: string;
} & ComponentProps<typeof Image>;
export default function BgImageLikeBox<T extends ElementType>({
  as,
  src,
  alt,
  priority,
  boxClassName,
  imgClassName,
  children,
  ...htmlAttrs
}: Props<T>) {
  const Tag: ElementType = as ?? 'div';
  return (
    <Tag
      {...htmlAttrs}
      className={cx(
        boxClassName,
        css({
          overflow: 'hidden',
          pos: 'relative',
        }),
      )}>
      <Image
        alt={alt}
        src={src}
        className={cx(
          imgClassName,
          css({
            pos: 'absolute',
            w: '100%',
            h: '100%',
            objectFit: 'cover',
          }),
        )}
      />
      {children}
    </Tag>
  );
}
