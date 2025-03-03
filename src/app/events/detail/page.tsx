import EventDetail from '@components/EventDetail';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import PreloadEvent from '@components/PreloadEvent';
import '../../../../public/fonts/fontface/Anzu.css';

export default function EventDetailPage() {
  return (
    <section>
      <PreloadEvent />

      <LazyLoadFontFace fontName="GenJyuuGoXP-R" />
      <LazyLoadFontFace fontName="GenJyuuGoXP-M" />
      <LazyLoadFontFace fontName="LovelyJackie" />

      <EventDetail />
    </section>
  );
}
