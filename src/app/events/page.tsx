import EventLink from '@components/EventLink';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import PageTitle from '@components/PageTitle';
import ServerSideVisual from '@components/ServerSideVisual';
import cookingIMG from '@images/main-v/cooking-image.webp';
import eventsIMG from '@images/main-v/event-visual.webp';
import { css, cx } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';
import '../../../public/fonts/fontface/Anzu.css';
import '../../../public/fonts/fontface/LovelyJackie.css';

export default function EventsPage() {
  return (
    <section>
      <LazyLoadFontFace fontName="GenJyuuGoXP-L" />
      <LazyLoadFontFace fontName="GenJyuuGoXP-R" />
      <LazyLoadFontFace fontName="GenJyuuGoXP-M" />

      <ServerSideVisual
        alt="地元野菜を販売するマルシェの様子"
        src={eventsIMG}
        objectPosClassName={css({
          objectPos: { tab: 'center 30%', pc: 'center 25%' },
        })}
      />

      <InnerSiteLayout>
        <PageTitle pageName="Events" />
        <FeatureSection
          title="今月の開催予定"
          isJP
          className={spaceCVA({ row: 'firstSection' })}>
          <div
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                d: 'grid',
                gridTemplateColumns: { base: 'repeat(2, 1fr)', tab: 'repeat(3, 1fr)', pc: 'repeat(4, 1fr)' },
                gap: '.5rem',
              }),
            )}>
            <EventLink
              href="/events/to-id"
              name="地元野菜を楽しむ料理教室"
              isoDateString="2025-02-01"
              time={{
                start: '10:00',
                end: '12:30',
              }}
              alt="地元野菜を並べて料理しているイラスト"
              src={cookingIMG}
            />
            <EventLink
              href="/events/to-id"
              name="地元野菜を楽しむ料理教室"
              isoDateString="2025-02-02"
              time={{
                start: '10:00',
                end: '12:30',
              }}
              alt="地元野菜を並べて料理しているイラスト"
              src={cookingIMG}
            />
            <EventLink
              href="/events/to-id"
              name="地元野菜を楽しむ料理教室"
              isoDateString="2025-02-03"
              time={{
                start: '10:00',
                end: '12:30',
              }}
              alt="地元野菜を並べて料理しているイラスト"
              src={cookingIMG}
            />
            <EventLink
              href="/events/to-id"
              name="地元野菜を楽しむ料理教室"
              isoDateString="2025-02-11"
              time={{
                start: '10:00',
                end: '12:30',
              }}
              alt="地元野菜を並べて料理しているイラスト"
              src={cookingIMG}
            />
          </div>
        </FeatureSection>
        <FeatureSection
          title="来月の開催予定"
          isJP
          className={spaceCVA({ row: 'section' })}>
          <div
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                d: 'grid',
                gridTemplateColumns: { base: 'repeat(2, 1fr)', tab: 'repeat(3, 1fr)', pc: 'repeat(4, 1fr)' },
                gap: '.5rem',
              }),
            )}>
            <EventLink
              href="/events/detail"
              name="地元野菜を楽しむ料理教室"
              isoDateString="2025-03-01"
              time={{
                start: '10:00',
                end: '12:30',
              }}
              alt="地元野菜を並べて料理しているイラスト"
              src={cookingIMG}
            />
          </div>
        </FeatureSection>
      </InnerSiteLayout>
    </section>
  );
}
