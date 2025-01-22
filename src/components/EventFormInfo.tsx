import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'div'> {}
export default function EventFormInfo({ className, children }: Props) {
  return (
    <div
      className={cx(
        className,
        fontCVA({ body: 'eventFormInfo' }),
        css({
          d: 'grid',
          gridTemplateColumns: 'auto 1fr',
          columnGap: '.25rem',
          alignItems: 'start',
          '&::before': {
            content: '""',
            d: 'block',
            w: '.75rem',
            aspectRatio: '1/1',
            radius: '4px',
            bgColor: '{colors.brown}',
            mt: '.375rem',
          },
        }),
      )}>
      {children}
    </div>
  );
}
