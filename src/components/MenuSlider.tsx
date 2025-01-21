'use client';
import MenuCard from '@components/MenuCard';
import pastaIMG from '@images/menu/pasta-tomato.webp';
import { css, cx } from '@styled-system/css';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  sliderID: string;
}
export default function MenuSlider({ className, sliderID }: Props) {
  const paginationID = `pagination-${sliderID}`;
  return (
    <div className={className}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          type: 'bullets',
          el: `.${paginationID}`,
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
        spaceBetween={8}
        slidesPerView={1.5}
        breakpoints={{
          '500': {
            slidesPerView: 2.5,
          },
          '1000': {
            slidesPerView: 4.5,
          },
        }}
        wrapperTag="ul"
        wrapperClass={css({
          px: '{spacing.inner.x}',
          mb: '4px',
        })}>
        {[1, 2, 3, 4, 5].map(num => {
          return (
            <SwiperSlide
              key={num}
              className={css({
                height: 'auto!important',
              })}
              tag="li">
              <MenuCard
                label="自家製オーガニックパスタ"
                price="1,200円（税込）"
                alt="バジルを添えたトマトパスタ"
                src={pastaIMG}>
                地元産のトマトとバジルを使用した、無添加の手作りパスタ。
                <br />
                野菜の旨味が際立つヘルシーなトマトソースで仕上げています。
                {num === 2 && (
                  <>
                    <br />
                    テキストの量が均一とは
                    <br />
                    限りません。
                  </>
                )}
              </MenuCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className={cx(
          paginationID,
          css({
            mt: '{spacing.inner.x}',
            textAlign: 'center',
          }),
        )}></div>
    </div>
  );
}
