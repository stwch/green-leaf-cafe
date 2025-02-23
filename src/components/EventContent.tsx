import { css, cx } from '@styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  isBonus?: boolean;
}
export default function EventContent({ children, className, isBonus }: Props) {
  return (
    <div
      className={cx(
        className,
        css({
          radius: '4px',
          bl: '2px solid {colors.main}',
          color: '{colors.base}',
          bgColor: isBonus ? '{colors.bonus}' : '{colors.brown}',
          textShadow: isBonus ? '{shadows.text.accent}' : '{shadows.text.brown}',
        }),
      )}>
      {children}
    </div>
  );
}
