import Body from '@components/Body';
import Copy from '@components/Copy';
import FeatureLink from '@components/FeatureLink';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import ServerSideVisual from '@components/ServerSideVisual';
import LeafSVG from '@components/svg/LeafSVG';
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

      <ServerSideVisual
        isMain
        alt="GreenLeafCafeの外観"
        src={cafeAppearanceIMG}
        objectPosClassName={css({
          objectPos: { pc: 'center 5%' },
        })}
      />

      <InnerSiteLayout>
        <div
          className={cx(
            spaceCVA({ row: 'section' }),
            css({
              w: 'fit-content',
              mt: '-9.5rem',
              pt: '2rem',
              px: { base: '2rem', tab: '3rem' },
              pos: 'relative',
              zIndex: '1',
              '&::before': {
                content: '""',
                d: 'block',
                w: '100%',
                h: '100%',
                bgColor: '{colors.base}',
                radius: '75% 200px 0 0',
                pos: 'absolute',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
                zIndex: '-1',
              },
            }),
          )}>
          <Copy />
        </div>
        <FeatureSection
          isMix
          title="GreenLeafCafe の特徴">
          <Body className={spaceCVA({ inner: 'x', row: 'object' })}>
            『&nbsp;GreenLeafCafe&nbsp;』&nbsp;は地元の農家と協力し、新鮮でオーガニックな食材を使用した料理を提供する、地域密着型のカフェです
          </Body>
          <div
            className={cx(
              spaceCVA({ row: 'section', inner: 'x' }),
              css({
                pos: 'relative',
                zIndex: '1',
                pc: {
                  d: 'grid',
                  gridTemplateColumns: 'repeat(3, auto)',
                  columnGap: '{spacing.inner.x}',
                },
              }),
            )}>
            <Image
              alt="GreenLeafCafeの内観"
              src={cafeInternalIMG}
              className={css({
                radius: '4px',
                minToPc: { mb: '{spacing.inner.x}' },
              })}
            />
            <LeafSVG
              className={css({
                color: '{colors.main}',
                w: '2rem',
                bgColor: '{colors.base}',
                pd: '.25rem',
                radius: '100px',
                pos: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-60%, -50%)',
              })}
            />
            <Image
              alt="地元農家とカフェオーナーの集合写真"
              src={farmersIMG}
              className={css({
                radius: '4px',
              })}
            />
          </div>
        </FeatureSection>
        <div
          className={cx(
            spaceCVA({ row: 'section' }),
            css({
              pc: {
                d: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
              },
            }),
          )}>
          <FeatureSection
            title="Menu"
            className={css({
              minToPc: {
                mb: '{spacing.row.section}',
              },
              pc: {
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
