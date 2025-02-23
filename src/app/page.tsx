import BgImageLikeBox from '@components/BgImageLikeBox';
import Body from '@components/Body';
import Copy from '@components/Copy';
import FeatureLink from '@components/FeatureLink';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import cafeInternalIMG from '@images/catch/cafe-internal.webp';
import farmersIMG from '@images/catch/farmers.webp';
import cafeAppearanceIMG from '@images/main-v/cafe-appearance.webp';
import cookingIMG from '@images/main-v/cooking-image.webp';
import eventIMG from '@images/main-v/event-visual.webp';
import menuIMG from '@images/main-v/menu-visual.webp';
import { css, cx } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import '../../public/fonts/fontface/Anzu.css';
import createArticleData from '../helpers/createArticleData';

const LazyLoadArticleSlider = dynamic(() => import('@components/AriticleSlider'));

export default function Home() {
  return (
    <section>
      <LazyLoadFontFace fontName="GenJyuuGoXP-L" />
      <LazyLoadFontFace fontName="GenJyuuGoXP-R" />
      <LazyLoadFontFace fontName="GenJyuuGoXP-M" />
      <LazyLoadFontFace fontName="LovelyJackie" />

      <BgImageLikeBox
        priority
        alt="GreenLeafCafeの外観"
        src={cafeAppearanceIMG}
        boxClassName={css({
          h: { base: 'calc(100svh - 5rem)', tab: 'calc(100svh - 3rem)' },
          '&::after': {
            content: '""',
            d: 'block',
            w: '115%',
            h: '30%',
            bgColor: '{colors.base}',
            radius: '100%',
            pos: 'absolute',
            left: '50%',
            bottom: '0',
            transform: 'translate(-50%, 50%)',
          },
        })}
        imgClassName={css({
          pc: {
            top: '-10%',
          },
        })}
      />
      <Copy
        className={cx(
          spaceCVA({ row: 'section' }),
          css({
            w: 'fit-content',
            mt: { base: '-3rem', tab: '-5rem' },
            mx: 'auto',
            pos: 'relative',
            zIndex: '1',
          }),
        )}
      />
      <InnerSiteLayout>
        <div
          className={cx(
            spaceCVA({ row: 'section', inner: 'x' }),
            css({
              tab: {
                d: 'grid',
                gridTemplateColumns: 'repeat(3, auto)',
                pos: 'relative',
              },
            }),
          )}>
          <Image
            alt="GreenLeafCafeの内観"
            src={cafeInternalIMG}
            className={css({
              overflow: 'hidden',
              radius: { base: '100% 100% 0 0', tab: '4px 0 0 0' },
            })}
          />
          <Body
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                py: { minToTab: '.5rem' },
                tab: {
                  w: '66%',
                  radius: '100px 100px 0 0',
                  overflow: 'hidden',
                  pos: 'absolute',
                  bottom: '-2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  px: '1.5rem',
                  pt: '.5rem',
                  '&::before': {
                    content: '""',
                    d: 'block',
                    w: '100%',
                    h: '2.1rem',
                    bgColor: '{colors.base}',
                    pos: 'absolute',
                    left: '0',
                    bottom: '2rem',
                    zIndex: '-1',
                  },
                },
              }),
            )}>
            『&nbsp;GreenLeafCafe&nbsp;』&nbsp;は地元の農家と協力し、新鮮でオーガニックな食材を使用した料理を提供する、地域密着型のカフェです
          </Body>
          <Image
            alt="地元農家とカフェオーナーの集合写真"
            src={farmersIMG}
            className={css({
              overflow: 'hidden',
              radius: { base: '0 0 100% 100%', tab: '0 4px 0 0' },
            })}
          />
        </div>
        <div
          className={cx(
            spaceCVA({ row: 'section' }),
            css({
              tab: {
                d: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
              },
            }),
          )}>
          <FeatureSection
            title="Menu"
            className={css({
              minToTab: {
                mb: '{spacing.row.section}',
              },
              tab: {
                d: 'grid',
                gridTemplateRows: 'auto 1fr',
              },
            })}>
            <div
              className={cx(
                spaceCVA({ inner: 'x' }),
                css({
                  d: 'grid',
                }),
              )}>
              <Body className={spaceCVA({ row: 'object' })}>
                健康志向の方にも、食事を楽しみたい方にもぴったりの、バラエティ豊かなメニューをご用意しています
              </Body>
              <FeatureLink
                href="/menu"
                alt="パスタ、タルト、ドリンクが並んだ写真"
                src={menuIMG}
                linkLabel="メニューを見てみる"
                className={css({
                  tab: { alignSelf: 'end' },
                  radius: '4px',
                })}
                imgClassName={css({
                  top: '25%',
                })}
              />
            </div>
          </FeatureSection>
          <FeatureSection title="Events">
            <div className={spaceCVA({ inner: 'x' })}>
              <Body className={spaceCVA({ row: 'object' })}>
                ただ食事をする場所ではなく、人と人がつながり、地域の魅力を感じる場としてワークショップやマルシェを開催しています
              </Body>
              <FeatureLink
                href="/events"
                alt="地元野菜を販売するマルシェの様子"
                src={eventIMG}
                linkLabel="イベントを見てみる"
                className={css({
                  radius: '4px',
                })}
                imgClassName={css({
                  top: '10%',
                })}
              />
            </div>
          </FeatureSection>
        </div>
        <FeatureSection
          title="Blog"
          className={spaceCVA({ row: 'section' })}>
          <div className={css({ overflow: 'hidden' })}>
            <Body className={spaceCVA({ row: 'object', inner: 'x' })}>
              カフェの日々の取り組みや、料理やイベントに込めた思いを皆さんにお届けします
            </Body>
            <LazyLoadArticleSlider
              sliderID="blog"
              articles={[
                createArticleData({
                  title: '料理教室開催のおしらせ',
                  category: 'イベント告知',
                  alt: '料理教室のイラスト',
                  staticImg: cookingIMG,
                }),
                createArticleData({
                  title: '料理教室開催のおしらせ',
                  category: 'イベント告知',
                  alt: '料理教室のイラスト',
                  staticImg: cookingIMG,
                }),
                createArticleData({
                  title: '料理教室開催のおしらせ',
                  category: 'イベント告知',
                  alt: '料理教室のイラスト',
                  staticImg: cookingIMG,
                }),
              ]}
            />
          </div>
        </FeatureSection>
      </InnerSiteLayout>
    </section>
  );
}
