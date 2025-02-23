import BgImageLikeBox from '@components/BgImageLikeBox';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import MenuSlider from '@components/MenuSlider';
import PageTitle from '@components/PageTitle';
import SetMenuCard from '@components/SeMenuCard';
import menuIMG from '@images/main-v/menu-visual.webp';
import { css, cx } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';
import '../../../public/fonts/fontface/GenJyuuGoXP-M.css';
import '../../../public/fonts/fontface/LovelyJackie.css';

export default function MenuPage() {
  return (
    <section>
      <LazyLoadFontFace fontName="GenJyuuGoXP-R" />
      <LazyLoadFontFace fontName="Anzu" />

      <BgImageLikeBox
        priority
        alt="パスタ、タルト、ドリンクが並んだ写真"
        src={menuIMG}
        boxClassName={css({
          d: 'flex',
          alignItems: 'end',
          h: '66.6vh',
        })}
        imgClassName={css({
          pc: {
            top: '10%',
          },
        })}
      />
      <PageTitle pageName="Menu" />

      <InnerSiteLayout>
        <FeatureSection
          title="Foods"
          className={spaceCVA({ row: 'firstSection' })}>
          <MenuSlider sliderID="foods" />
        </FeatureSection>
        <FeatureSection
          title="Drinks"
          className={spaceCVA({ row: 'section' })}>
          <MenuSlider sliderID="drinks" />
        </FeatureSection>
        <FeatureSection
          title="Desserts"
          className={spaceCVA({ row: 'section' })}>
          <MenuSlider sliderID="desserts" />
        </FeatureSection>
        <FeatureSection
          title="SetMenu"
          className={spaceCVA({ row: 'section' })}>
          <ul
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                d: 'grid',
                gap: '.5rem',
                pc: {
                  gridTemplateColumns: 'repeat(2, 1fr)',
                },
              }),
            )}>
            <SetMenuCard
              setName="ランチセット"
              price="1,800円（税込）"
            />
            <SetMenuCard
              setName="スイーツセット"
              price="1,100円（税込）"
            />
          </ul>
        </FeatureSection>
      </InnerSiteLayout>
    </section>
  );
}
