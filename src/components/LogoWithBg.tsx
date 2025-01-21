import logoIMG from '@images/logo.svg';
import { css, cx } from '@styled-system/css';
import Image from 'next/image';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type Props<T extends ElementType> = Omit<ComponentPropsWithoutRef<T>, 'className' | 'as'> & {
  as?: T;
};
export default function LogoWithBg<T extends ElementType>({ as, className, ...htmlAttrs }: Props<T>) {
  const Tag: ElementType = as ?? 'div';
  return (
    <Tag
      {...htmlAttrs}
      className={cx(
        className,
        css({
          pd: '.25rem .5rem',
          radius: '4px',
          bgColor: '{colors.base}',
        }),
      )}>
      <Image
        alt="GreenLeafCafeのロゴ"
        src={logoIMG}
      />
    </Tag>
  );
}
