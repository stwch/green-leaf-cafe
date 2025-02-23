import SetMenuChoice from '@components/SetMenuChoice';
import pastaIMG from '@images/menu/pasta-tomato.webp';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type Props<T extends ElementType> = Omit<ComponentPropsWithoutRef<T>, 'className' | 'as'> & {
  as?: T;
  setName: string;
  price: string;
};
export default function SetMenuCard<T extends ElementType>({
  as,
  children,
  setName,
  choiceText,
  price,
  ...htmlAttrs
}: Props<T>) {
  const Tag: ElementType = as ?? 'div';
  return (
    <Tag
      {...htmlAttrs}
      className={css({
        pd: '1rem .75rem',
        textAlign: 'center',
        radius: '4px',
        bgColor: '{colors.brown}',
        color: '{colors.base}',
        pos: 'relative',
        zIndex: '1',
        '&::before': {
          content: '""',
          d: 'block',
          pos: 'absolute',
          inset: '0',
          zIndex: '-1',
          bgImage: '{assets.bgPatternImg}',
          opacity: '0.1',
          bgSize: 'cover',
          bgPos: 'center',
        },
      })}>
      <p
        className={cx(
          fontCVA({ label: 'setMenuName' }),
          css({
            textShadow: '{shadows.text.brown}',
            mb: '.625rem',
          }),
        )}>
        {setName}
      </p>
      <p
        className={cx(
          fontCVA({ label: 'setMenuInfo' }),
          css({
            mb: '.25rem',
            textShadow: '{shadows.text.brown}',
          }),
        )}>
        \各種お好きなものをお選びいただけます/
      </p>
      <ul
        className={css({
          d: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: '.25rem',
          justifyContent: 'center',
          mb: '.875rem',
        })}>
        {[1, 2, 3].map(num => {
          return (
            <SetMenuChoice
              key={num}
              as="li"
              alt="パスタ"
              src={pastaIMG}
              label="フード"
            />
          );
        })}
      </ul>
      <p
        className={cx(
          fontCVA({ label: 'setMenuPrice' }),
          css({
            textShadow: '{shadows.text.brown}',
          }),
        )}>
        {price}
      </p>
    </Tag>
  );
}
