import ArticleBody from '@components/ArticleBody';
import ArticleDate from '@components/ArticleDate';
import ArticleImage from '@components/ArticleImage';
import ArticleSection from '@components/ArticleSection';
import BgImageLikeBox from '@components/BgImageLikeBox';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import MoreArticleLink from '@components/MoreArticleLink';
import createArticleData from '@helpers/createArticleData';
import cookStartIMG from '@images/catch/cooking-start.webp';
import cookingIMG from '@images/catch/event-cooking.webp';
import instaSVG from '@images/icon/instagram.svg';
import xSVG from '@images/icon/x.svg';
import tarutoIMG from '@images/menu/tart-winter.webp';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import { spaceCVA } from '@styles/spaceCVA';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import '../../../../public/fonts/fontface/Anzu.css';
import '../../../../public/fonts/fontface/GenJyuuGoXP-R.css';

const LazyLoadArticleSlider = dynamic(() => import('@components/AriticleSlider'));

export default function BlogIdPage() {
  return (
    <section>
      <LazyLoadFontFace fontName="GenJyuuGoXP-M" />
      <LazyLoadFontFace fontName="LovelyJackie" />

      <BgImageLikeBox
        priority
        alt="地元野菜を楽しむ料理教室の様子"
        src={cookingIMG}
        boxClassName={css({
          h: '66.6vh',
        })}
      />
      <h1
        className={cx(
          fontCVA({ title: 'articleTitle' }),
          spaceCVA({ inner: 'x' }),
          css({
            my: '.75rem',
            w: 'fit-content',
            tab: { mx: 'auto' },
          }),
        )}>
        第12回 地元野菜を楽しむ料理教室
      </h1>
      <div
        className={cx(
          spaceCVA({ inner: 'x' }),
          css({
            d: 'flex',
            columnGap: '.5rem',
            mb: '{spacing.row.section}',
            tab: { justifyContent: 'center' },
          }),
        )}>
        <ArticleDate
          mode="public"
          isoDateString="2025-01-29"
        />
        <ArticleDate
          mode="update"
          isoDateString="2025-01-30"
        />
      </div>
      {/* <LeafSVG
        className={css({
          color: '{colors.main}',
          d: 'block',
          w: '2rem',
          // mx: 'auto',
          ml: '33%',
          my: '{spacing.row.section}',
        })}
      /> */}
      <InnerSiteLayout isBlog>
        <div className={spaceCVA({ inner: 'x', row: 'section' })}>
          <ArticleBody>
            こんにちは！グリーンリーフカフェです
            <br />
            先日開催された『地元野菜を楽しむ料理教室』の第12回の様子をお届けします！
          </ArticleBody>
          <ArticleBody>
            このイベントは毎回大人気で、今回も地元の新鮮な野菜を使った楽しい料理の時間を共有することができました。
          </ArticleBody>
        </div>
        <ArticleSection title="今回の料理教室は...">
          <ArticleBody>
            今回の料理教室では、地元農家から仕入れた旬の野菜を使って、スープとパスタを作りました。
          </ArticleBody>
          <ArticleBody>
            このイベントは毎回大人気で、今回も地元の新鮮な野菜を使った楽しい料理の時間を共有することができました。
          </ArticleBody>
          <ArticleBody>
            新鮮なトマトやバジル、甘みたっぷりの人参など、見た目にも鮮やかな野菜たちがテーブルを彩ります。
          </ArticleBody>
          <ArticleImage
            src={cookStartIMG}
            alt="野菜がテーブルを彩る"
            imgClassName={css({
              top: '15%', //実際には、16/9でアップロードされることを前提にするので、将来的には不要
            })}
          />
          <ArticleBody>参加者の皆さんも「野菜の香りが全然違う！」と驚きの声を上げていました。</ArticleBody>
        </ArticleSection>
        <FeatureSection
          isJP
          title="この記事をシェアする？"
          className={spaceCVA({ row: 'section' })}>
          <ul
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                d: 'grid',
                gridTemplateColumns: '2rem 2rem',
                justifyContent: 'start',
                columnGap: '.5rem',
              }),
            )}>
            <li>
              <Image
                alt="インスタグラムのアイコン"
                src={instaSVG}
              />
            </li>
            <li>
              <Image
                alt="Xのアイコン"
                src={xSVG}
              />
            </li>
          </ul>
        </FeatureSection>

        <FeatureSection
          isJP
          title="他の記事一覧"
          className={spaceCVA({ row: 'section' })}>
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

        <MoreArticleLink className={spaceCVA({ row: 'section' })} />
      </InnerSiteLayout>
    </section>
  );
}
