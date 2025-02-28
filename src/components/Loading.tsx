import { css, cx } from '@styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'span'> {}
export default function Loading({ className }: Props) {
  return (
    <span
      className={cx(
        className,
        css({
          d: 'inline-block',
          aspectRatio: '1/1',
          borderTop: '3px solid {colors.main}',
          borderRight: '3px solid transparent',
          radius: '50%',
          animation: 'rotation .75s linear infinite',
        }),
      )}
    />
  );
}
