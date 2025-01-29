import { css, cx } from '@styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  label: string;
  count: number;
}
export default function CategoryLink({ label, count, className }: Props) {
  return (
    <a
      href="#"
      className={cx(
        className,
        css({
          d: 'grid',
          gridTemplateColumns: 'auto auto',
          columnGap: '.5rem',
          w: 'fit-content',
          bgColor: '{colors.brown}',
          radius: '4px',
          fontFamily: 'GenJyuuGoXP-R',
          lineHeight: '1.5',
          color: '{colors.base}',
          pd: '.25rem .5rem',
        }),
      )}>
      {label}
      <span
        className={css({
          d: 'block',
          aspectRatio: '1/1',
          color: '{colors.brown}',
          fontFamily: 'GenJyuuGoXP-M',
          lineHeight: '1.5',
          bgColor: '{colors.base}',
          radius: '100px',
          textAlign: 'center',
        })}>
        {count}
      </span>
    </a>
  );
}
