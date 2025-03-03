import Loading from '@components/Loading';
import { css, cx } from '@styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  text: string;
}
export default function LoadingWithText({ className, text }: Props) {
  return (
    <div
      className={cx(
        className,
        css({
          d: 'flex',
          columnGap: '.25rem',
        }),
      )}>
      <div
        className={css({
          fontFamily: 'Anzu',
          fontSize: '2rem',
        })}>
        {text}
      </div>
      <Loading className={css({ w: '1.5rem' })} />
    </div>
  );
}
