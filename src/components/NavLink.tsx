import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import type { FunctionComponent } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  label: string;
  SVGComponent: FunctionComponent<{ className: string }>;
  isCurrent?: boolean;
}
export default function NavLink({ className, href, SVGComponent, label, isCurrent }: Props) {
  return (
    <a
      href={href}
      className={cx(
        className,
        fontCVA({ link: 'nav' }),
        css({
          d: 'grid',
          gridTemplateColumns: 'repeat(2, auto)',
          columnGap: '.25rem',
          w: 'fit-content',
          radius: '4px',
          pd: '.125rem .75rem .125rem .25rem',
          bgColor: '{colors.base}',
        }),
      )}>
      <SVGComponent
        className={cx(
          isCurrent && css({ color: '{colors.main}' }),
          css({
            w: '1.5rem',
          }),
        )}
      />
      {label}
    </a>
  );
}
