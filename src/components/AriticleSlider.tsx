'use client';
import ArticleLink from '@components/ArticleLink';
import { css, cx } from '@styled-system/css';
import 'swiper/css';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props extends React.ComponentPropsWithoutRef<'div'> {}
export default function ArticleSlider({ className }: Props) {
  return (
    <div className={className}>
      <Swiper
        modules={[Pagination, Mousewheel]}
        pagination={{
          type: 'bullets',
          el: '.pagination',
          clickable: true,
          bulletClass: css({
            d: 'inline-block',
            w: '.5rem',
            aspectRatio: '1/1',
            radius: '100px',
            bgColor: '#333',
            cursor: 'pointer',
            '&+&': { ml: '.5rem' },
          }),
          bulletActiveClass: css({ bg: '{colors.main}!important', opacity: '1!important' }),
        }}
        mousewheel={{
          releaseOnEdges: true,
        }}
        spaceBetween={8}
        slidesPerView={1.25}
        breakpoints={{
          '768': {
            slidesPerView: 2.25,
          },
        }}
        wrapperTag="ul"
        wrapperClass={css({
          px: '{spacing.inner.x}',
          mb: '4px',
        })}>
        {[1, 2, 3, 4].map(num => {
          return (
            <SwiperSlide
              key={num}
              tag="li">
              <ArticleLink />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className={cx(
          'pagination',
          css({
            mt: '{spacing.inner.x}',
            textAlign: 'center',
          }),
        )}
      />
    </div>
  );
}
