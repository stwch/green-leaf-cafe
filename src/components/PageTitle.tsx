import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'h1'> {
  pageName: string;
  isJP?: boolean;
}
export default function PageTitle({ className, pageName, isJP }: Props) {
  return (
    <h1
      className={cx(
        className,
        fontCVA({ title: isJP ? 'pageJP' : 'pageEN' }),
        css({
          w: 'fit-content',
          mx: 'auto',
          radius: '100px 100px 0 0',
          px: '2rem',
          overflow: 'hidden',
          mt: '-1.5rem',
          pos: 'relative',
          zIndex: '1',
          '&::before': {
            content: '""',
            d: 'block',
            w: '100%',
            h: '1.6rem',
            bgColor: '{colors.base}',
            pos: 'absolute',
            top: '0',
            left: '0',
            zIndex: '-1',
          },
        }),
      )}>
      {pageName}
    </h1>
  );
}
