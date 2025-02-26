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
        isJP && css({ pt: '.5rem' }),
        css({
          w: 'fit-content',
          overflow: 'hidden',
          radius: '100% 100% 0 0',
          mx: 'auto',
          px: '3rem',
          mt: '-2rem',
          pos: 'relative',
          zIndex: '1',
          '&::before': {
            content: '""',
            d: 'block',
            w: '100%',
            h: '2.1rem',
            bgColor: '{colors.base}',
            pos: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '-1',
          },
        }),
      )}>
      {pageName}
    </h1>
  );
}
