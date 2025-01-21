import LogoWithBg from '@components/LogoWithBg';
import instaSVG from '@images/icon/instagram.svg';
import xSVG from '@images/icon/x.svg';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import Image from 'next/image';

interface Props extends React.ComponentPropsWithoutRef<'footer'> {}
export default function Footer({}: Props) {
  return (
    <footer
      className={css({
        pos: 'relative',
        '&::before': {
          content: '""',
          d: 'block',
          w: '7.5rem',
          aspectRatio: '1/1',
          bgColor: '{colors.main}',
          maskImage: 'url(/images/leaf-three.png)',
          maskSize: '100%',
          transform: 'scaleX(-1)',
          ml: 'auto',
          mr: '{spacing.inner.x}',
          mb: '-1.25rem',
        },
      })}>
      <div
        className={css({
          bgColor: '{colors.main}',
          pos: 'relative',
          '&::before': {
            content: '""',
            d: 'block',
            w: '100%',
            h: '100%',
            bgColor: '{colors.main}',
            pos: 'absolute',
            left: '-99%',
            top: '0',
            zIndex: '-1',
          },
        })}>
        <div
          className={css({
            maxW: '{breakpoints.pc}',
            mx: 'auto',
            pt: '1rem',
            pl: '{spacing.inner.x}',
            overflow: 'hidden', //コピーライトがはみ出すため指定
          })}>
          <div
            className={css({
              d: 'grid',
              gridTemplateColumns: 'repeat(2, auto)',
              justifyContent: 'start',
              alignItems: 'center',
              columnGap: '1rem',
              mb: '1rem',
            })}>
            <LogoWithBg
              className={css({
                w: '7.5rem',
              })}
            />
            <div>
              <p
                className={cx(
                  fontCVA({ ex: 'sns' }),
                  css({
                    d: 'block',
                    mb: '.25rem',
                  }),
                )}>
                SNSも見てみる？
              </p>
              <div
                className={css({
                  d: 'grid',
                  gridTemplateColumns: '2rem 2rem',
                  justifyContent: 'start',
                  columnGap: '.5rem',
                })}>
                <Image
                  alt="インスタグラムのアイコン"
                  src={instaSVG}
                />
                <Image
                  alt="Xのアイコン"
                  src={xSVG}
                />
              </div>
            </div>
          </div>
          <small
            className={cx(
              fontCVA({ ex: 'copyright' }),
              css({
                d: 'block',
                color: '{colors.base}',
                mb: '1px',
              }),
            )}>
            &copy;&nbsp;2024&nbsp;GreenLeafCafe
          </small>
        </div>
      </div>
    </footer>
  );
}
