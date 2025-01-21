import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'p'> {
  label: string;
}
export default function NavTitle({ className, label }: Props) {
  return (
    <p
      className={cx(
        className,
        fontCVA({ title: 'menu' }),
        css({
          color: '{colors.base}',
          bb: '1px solid {colors.base}',
          mb: '1.5rem',
        }),
      )}>
      {label}
    </p>
  );
}
