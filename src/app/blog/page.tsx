import Body from '@components/Body';
import CategoryLink from '@components/CategoryLink';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import MoreArticleLink from '@components/MoreArticleLink';
import ServerSideVisual from '@components/ServerSideVisual';
import LeafSVG from '@components/svg/LeafSVG';
import createArticleData from '@helpers/createArticleData';
import cookingIMG from '@images/catch/event-cooking.webp';
import cafeAppearanceIMG from '@images/main-v/cafe-appearance.webp';
import tarutoIMG from '@images/menu/tart-winter.webp';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import { spaceCVA } from '@styles/spaceCVA';
import dynamic from 'next/dynamic';
import '../../../public/fonts/fontface/Anzu.css';

const LazyLoadArticleSlider = dynamic(() => import('@components/AriticleSlider'));

export default function EventsPage() {
  return (
    <section>
      <LazyLoadFontFace fontName="GenJyuuGoXP-R" />
      <LazyLoadFontFace fontName="GenJyuuGoXP-M" />
      <LazyLoadFontFace fontName="LovelyJackie" />

      <ServerSideVisual
        isMain
        alt="GreenLeafCafeの外観"
        src={cafeAppearanceIMG}
      />
      <InnerSiteLayout>
        <section className={spaceCVA({ row: 'section' })}>
          <div
            className={css({
              w: 'fit-content',
              mt: '-11.25rem',
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
                radius: '75% 200px 20% 0',
                pos: 'absolute',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
                zIndex: '-1',
              },
            })}>
            <h1 className={cx(fontCVA({ title: 'pageJP' }), spaceCVA({ row: 'section' }))}>
              自然とつながる
              <span className={css({ d: 'block' })}>心と体が喜ぶ</span>
              <span
                className={css({
                  d: 'flex',
                  columnGap: '.25rem',
                })}>
                カフェブログ
                <LeafSVG
                  className={cx(
                    css({
                      w: '3rem',
                      color: '{colors.main}',
                      mt: '-0.75rem',
                    }),
                  )}
                />
              </span>
            </h1>
          </div>
          <div className={spaceCVA({ inner: 'x' })}>
            <Body>
              こんにちは！&nbsp;グリーンリーフカフェです。
              <br />
              このブログでは、私たちの日々の取り組みや、料理やイベントに込めた思いを皆さんにお届けします。
            </Body>
            <Body>オーガニック食材が持つ美味しさと健康への効果をぜひ知ってください！</Body>
          </div>
        </section>
        <FeatureSection
          isJP
          title="カテゴリー"
          className={spaceCVA({ row: 'section' })}>
          <ul
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                d: 'flex',
                flexWrap: 'wrap',
                gap: '.5rem',
              }),
            )}>
            {[
              { label: 'イベント告知', count: 5 },
              { label: 'イベントレポート', count: 3 },
              { label: '新メニュー', count: 12 },
              { label: '季節のメニュー', count: 3 },
            ].map(category => {
              const { label, count } = category;
              return (
                <li
                  key={label}
                  className={css({ w: 'fit-content' })}>
                  <CategoryLink
                    label={label}
                    count={count}
                  />
                </li>
              );
            })}
          </ul>
        </FeatureSection>
        <FeatureSection
          isJP
          title="イベントレポート"
          className={spaceCVA({ row: 'section' })}>
          <div className={spaceCVA({ inner: 'x', row: 'object' })}>
            <Body>毎月開催している料理教室やヨガイベントの様子、参加者の声をお届けします。</Body>
            <Body>参加を迷っている方も、このブログで雰囲気を感じてみてください。</Body>
          </div>
          <LazyLoadArticleSlider
            sliderID="report"
            articles={[
              createArticleData({
                title: '第2回 - 料理教室の様子',
                category: 'イベントレポート',
                alt: '料理教室の様子',
                staticImg: cookingIMG,
              }),
              createArticleData({
                title: '第2回 - 料理教室の様子',
                category: 'イベントレポート',
                alt: '料理教室の様子',
                staticImg: cookingIMG,
              }),
              createArticleData({
                title: '第2回 - 料理教室の様子',
                category: 'イベントレポート',
                alt: '料理教室の様子',
                staticImg: cookingIMG,
              }),
            ]}
          />
        </FeatureSection>
        <FeatureSection
          isJP
          title="新メニューのご案内"
          className={spaceCVA({ row: 'section' })}>
          <div className={spaceCVA({ inner: 'x', row: 'object' })}>
            <Body>
              心を込めて考案した新メニューや、期間限定のスペシャルメニューをご紹介。
              <br />
              作成の裏話もお楽しみに！
            </Body>
          </div>
          <LazyLoadArticleSlider
            sliderID="new_menu"
            articles={[
              createArticleData({
                title: '冬限定！ 季節のフルーツタルト',
                category: '季節のメニュー',
                color: 'brown',
                alt: '冬のタルト',
                staticImg: tarutoIMG,
              }),
              createArticleData({
                title: '冬限定！ 季節のフルーツタルト',
                category: '季節のメニュー',
                color: 'brown',
                alt: '冬のタルト',
                staticImg: tarutoIMG,
              }),
              createArticleData({
                title: '冬限定！ 季節のフルーツタルト',
                category: '季節のメニュー',
                color: 'brown',
                alt: '冬のタルト',
                staticImg: tarutoIMG,
              }),
            ]}
          />
        </FeatureSection>

        <div className={css({ py: '{spacing.row.section}' })}>
          <MoreArticleLink className={spaceCVA({ row: 'section' })} />
        </div>
      </InnerSiteLayout>
    </section>
  );
}
