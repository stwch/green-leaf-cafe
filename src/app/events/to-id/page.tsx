import BgImageLikeBox from '@components/BgImageLikeBox';
import Body from '@components/Body';
import EventDate from '@components/EventDate';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import PageTitle from '@components/PageTitle';
import SectionTitle from '@components/SectionTitle';
import LeafSVG from '@components/svg/LeafSVG';
import cookingIMG from '@images/main-v/cooking-image.webp';
import { css, cx } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';
import '../../../../public/fonts/fontface/Anzu.css';
import '../../../../public/fonts/fontface/GenJyuuGoXP-R.css';

export default function EventIdPage() {
  return (
    <section>
      <LazyLoadFontFace fontName="GenJyuuGoXP-M" />
      <LazyLoadFontFace fontName="LovelyJackie" />

      <BgImageLikeBox
        priority
        alt="地元野菜を並べて料理しているイラスト"
        src={cookingIMG}
        boxClassName={css({
          h: '66.6vh',
        })}
        imgClassName={css({
          top: { tab: '15%', pc: '55%' },
        })}
      />
      <PageTitle
        isJP
        pageName="イベント詳細"
        className={spaceCVA({ row: 'section' })}
      />
      <InnerSiteLayout>
        <SectionTitle
          isJP
          withLeaf={false}
          className={spaceCVA({ row: 'section', inner: 'x' })}>
          地元野菜を楽しむ料理教室
        </SectionTitle>
        <FeatureSection
          isJP
          title="どんなイベント？"
          className={spaceCVA({ row: 'section' })}>
          <Body className={cx(spaceCVA({ inner: 'x' }))}>
            地元の農家から仕入れた旬の野菜を使った料理を学べるワークショップです。
            <br />
            自分で作った料理を試食し、オーガニック食材の魅力を体験できます。
          </Body>
        </FeatureSection>
        <FeatureSection
          isJP
          title="開催情報"
          className={spaceCVA({ row: 'section' })}>
          <div
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                d: 'grid',
                gridTemplateColumns: 'auto 1fr',
                columnGap: '.5rem',
                alignItems: 'end',
              }),
            )}>
            <EventDate
              viewHeader
              isoDateString="2025-02-01"
              time={{
                start: '10:00',
                end: '12:30',
              }}
            />
            <ul>
              {['定員：10名', '参加費：3000円'].map(label => {
                return (
                  <li
                    key={label}
                    className={css({
                      d: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      columnGap: '.125rem',
                      fontSize: '.875rem',
                      fontFamily: 'GenJyuuGoXP-M',
                      '&+&': {
                        mt: '.5rem',
                      },
                    })}>
                    <LeafSVG className={css({ w: '.875rem', color: '{colors.main}' })} />
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        </FeatureSection>
      </InnerSiteLayout>
    </section>
  );
}
