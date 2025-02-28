import EventListSection from '@components/EventListSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import PageTitle from '@components/PageTitle';
import PreloadEventList from '@components/PreloadEventList';
import ServerSideVisual from '@components/ServerSideVisual';
import eventsIMG from '@images/main-v/event-visual.webp';
import { css } from '@styled-system/css';
import '../../../public/fonts/fontface/Anzu.css';
import '../../../public/fonts/fontface/LovelyJackie.css';

export default function EventsPage() {
  return (
    <section>
      <PreloadEventList />

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
        <EventListSection />
      </InnerSiteLayout>
    </section>
  );
}
