import LogoWithBg from '@components/LogoWithBg';
import { css, cx } from '@styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'header'> {}
export default function Header({ className }: Props) {
  return (
    <header
      className={cx(
        className,
        css({
          w: { base: '7.5rem', tab: '7.5rem' },
        }),
      )}>
      <LogoWithBg />
    </header>
  );
}
