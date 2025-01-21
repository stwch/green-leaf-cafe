import LeafSVG from '@components/svg/LeafSVG';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

const leafW = '1.5rem';

interface Props extends React.ComponentPropsWithoutRef<'h2'> {
  isJP?: boolean;
  withLeaf?: boolean;
}
export default function ({ className, children, isJP, withLeaf }: Props) {
  return (
    <h2
      className={cx(
        className,
        fontCVA({ title: isJP ? 'sectionJP' : 'sectionEN' }),
        css({
          w: 'fit-content',
          pr: leafW,
          pos: 'relative',
        }),
      )}>
      {children}
      {withLeaf && (
        <LeafSVG
          className={css({
            color: '{colors.main}',
            pos: 'absolute',
            bottom: '.25rem',
            right: '-2px',
            w: leafW,
          })}
        />
      )}
    </h2>
  );
}
