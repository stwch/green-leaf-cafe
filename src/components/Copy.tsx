import LeafSVG from '@components/svg/LeafSVG';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

const leafW = '4rem';

interface Props extends React.ComponentPropsWithoutRef<'strong'> {}
export default function ({ className }: Props) {
  return (
    <h1
      className={cx(
        className,
        fontCVA({ title: 'copy' }),
        css({
          pl: '2.5rem',
        }),
      )}>
      地域とつながる
      <span
        className={css({
          d: 'block',
          w: 'fit-content',
          pr: leafW,
          pos: 'relative',
        })}>
        やさしいカフェ
        <LeafSVG
          className={css({
            color: '{colors.main}',
            pos: 'absolute',
            bottom: '.5rem',
            right: 0,
            w: leafW,
          })}
        />
      </span>
    </h1>
  );
}
