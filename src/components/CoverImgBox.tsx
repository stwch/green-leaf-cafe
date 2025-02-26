import { css, cx } from '@styled-system/css';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type Props<T extends ElementType> = Omit<ComponentPropsWithoutRef<T>, 'className' | 'as'> & {
  as?: T;
  boxSizeClassName: string; //height かaspectRatio の指定が必要
  imgPosClassName?: string;
};
export default function CoverImgBox<T extends ElementType>({
  as,
  className,
  boxSizeClassName,
  imgPosClassName,
  children,
  ...htmlAttrs
}: Props<T>) {
  const Tag: ElementType = as ?? 'div';
  return (
    <Tag
      {...htmlAttrs}
      className={cx(
        className,
        boxSizeClassName,
        css({
          overflow: 'hidden',
          pos: 'relative',
        }),
      )}>
      {children}
      {/* <div
        className={cx(
          imgPosClassName,
          css({
            // pos: 'absolute',
            // inset: '0',
            // objectFit: 'cover',
          }),
        )}>
        {children}
      </div> */}
    </Tag>
  );
}
