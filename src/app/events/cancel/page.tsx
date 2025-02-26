import EventCancelForm from '@components/EventCancelForm';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import PageTitle from '@components/PageTitle';
import ServerSideVisual from '@components/ServerSideVisual';
import cafeAppearanceIMG from '@images/main-v/cafe-appearance.webp';
import { css, cx } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';
import '../../../../public/fonts/fontface/Anzu.css';
import '../../../../public/fonts/fontface/GenJyuuGoXP-M.css';
import '../../../../public/fonts/fontface/GenJyuuGoXP-R.css';
import '../../../../public/fonts/fontface/LovelyJackie.css';

export default function CancelFormPage() {
  return (
    <section>
      <ServerSideVisual
        alt="GreenLeafCafe 外観"
        src={cafeAppearanceIMG}
        objectPosClassName={css({
          objectPos: { tab: 'center 15%', pc: 'center 55%' },
        })}
      />
      <InnerSiteLayout>
        <PageTitle
          isJP
          pageName="キャンセルフォーム"
        />

        <FeatureSection
          isJP
          title="フォーム"
          className={spaceCVA({ row: 'firstSectionJP' })}>
          <div className={cx(spaceCVA({ inner: 'x' }), css({ pt: '1rem' }))}>
            <EventCancelForm />
          </div>
        </FeatureSection>
      </InnerSiteLayout>
    </section>
  );
}
