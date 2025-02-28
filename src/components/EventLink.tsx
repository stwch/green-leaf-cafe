import BgImageLikeBox from '@components/BgImageLikeBox';
import CoverImg from '@components/CoverImg';
import CoverImgBox from '@components/CoverImgBox';
import EventDate from '@components/EventDate';
import NextArrowSVG from '@components/svg/NextArrowSVG';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import Link from 'next/link';
import type { ComponentProps } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  isoDateString: string;
  time: {
    start: string;
    end: string;
  };
  name: string;
}
export default function EventLink({
  href,
  name,
  isoDateString,
  time,
  alt,
  src,
}: Omit<ComponentProps<typeof BgImageLikeBox>, 'boxClassName'> & Props) {
  return (
    href && (
      <Link
        href={href}
        className={css({
          radius: '4px',
          bgColor: '{colors.main}',
          pd: '.125rem',
          d: 'grid',
          rowGap: '.125rem',
          boxShadow: '{shadows.card}',
        })}>
        <EventDate
          isoDateString={isoDateString}
          time={time}
        />
        <p
          className={cx(
            fontCVA({ link: 'eventName' }),
            css({
              radius: '4px',
              bgColor: '{colors.base}',
              pd: '.375rem .25rem',
            }),
          )}>
          {name}
        </p>
        <CoverImgBox
          boxSizeClassName={css({
            aspectRatio: '1/1',
            radius: '4px',
          })}>
          <CoverImg
            alt={alt}
            src={src}
          />
        </CoverImgBox>
        {/* <BgImageLikeBox
        alt={alt}
        src={src}
        boxClassName={css({
          aspectRatio: '1/1',
          radius: '4px',
        })}
      /> */}
        <p
          className={cx(
            fontCVA({ link: 'eventLink' }),
            css({
              d: 'grid',
              gridTemplateColumns: 'repeat(2, auto)',
              alignItems: 'center',
              w: 'fit-content',
              justifySelf: 'end',
              radius: '4px',
              bgColor: '{colors.base}',
              pl: '.5rem',
            }),
          )}>
          詳細ページへ
          <NextArrowSVG
            className={css({
              w: '1.5rem',
            })}
          />
        </p>
      </Link>
    )
  );
}
