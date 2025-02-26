'use client';
import { css, cx } from '@styled-system/css';
import Image from 'next/image';
import type { ComponentProps } from 'react';

type ExtendProps = Omit<React.ComponentPropsWithoutRef<'img'>, 'src'> & ComponentProps<typeof Image>;
interface Props extends ExtendProps {
  objectPosClassName?: string;
}
export default function CoverImg({ src, alt, width, height, priority, objectPosClassName, className }: Props) {
  return (
    <Image
      priority={priority}
      alt={alt}
      src={src}
      width={width}
      height={height}
      fill
      className={cx(className, objectPosClassName, css({ objectFit: 'cover' }))}
    />
  );
}
