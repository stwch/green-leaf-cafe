import BgImageLikeBox from '@components/BgImageLikeBox';
import Body from '@components/Body';
import FeatureSection from '@components/FeatureSection';
import mapIMG from '@images/map.svg';
import { css, cx } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';

interface Props extends React.ComponentPropsWithoutRef<'section'> {}
export default function AccessSection({ className }: Props) {
  return (
    <FeatureSection
      className={cx(className, css({}))}
      title="Access">
      <div
        className={cx(
          spaceCVA({ inner: 'x' }),
          css({
            tab: {
              d: 'grid',
              alignItems: 'center',
              rowGap: '{spacing.row.body.object}',
            },
            gridTemplateColumns: { tab: 'auto', pc: '0.5fr' },
          }),
        )}>
        <div
          className={css({
            minToTab: {
              mb: '{spacing.row.body.object}',
            },
          })}>
          <Body>
            営業時間
            <br />
            平日：10:00 ～ 19:00（L.O. 18:30）
            <br />
            土日祝：9:00 ～ 20:00（L.O. 19:30）
          </Body>
          <Body>火曜定休</Body>
          <Body>
            電話番号
            <br />
            12-3456-7890
          </Body>
          <Body>
            〒123-4567
            <br />
            東京都架空市中央区希望町1丁目2-3
          </Body>
          <Body>架空駅から徒歩10分</Body>
        </div>
        <BgImageLikeBox
          alt="GreenLeafCafeまでの地図"
          src={mapIMG}
          boxClassName={css({
            radius: '4px',
            aspectRatio: '600/371',
          })}
        />
      </div>
    </FeatureSection>
  );
}
