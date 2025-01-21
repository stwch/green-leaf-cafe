import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'p'> {}
export default function ({ className, children }: Props) {
  return (
    <p
      className={cx(
        className,
        fontCVA({ body: 'page' }),
        css({
          '&+&': { mt: '{spacing.row.body}' },
        }),
      )}>
      {children}
    </p>
  );
}
