import BgImageLikeBox from '@components/BgImageLikeBox';
import Body from '@components/Body';
import EventContent from '@components/EventContent';
import EventDate from '@components/EventDate';
import EventForm from '@components/EventForm';
import EventFormInfo from '@components/EventFormInfo';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import LazyLoadFontFace from '@components/LazyLoadFontFace';
import PageTitle from '@components/PageTitle';
import SectionTitle from '@components/SectionTitle';
import ServerSideVisual from '@components/ServerSideVisual';
import WithLeafList from '@components/WithLeafList';
import cookingHistory2IMG from '@images/catch/cooking-history.webp';
import cookingHistory1IMG from '@images/catch/event-cooking.webp';
import cookingIMG from '@images/main-v/cooking-image.webp';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import { spaceCVA } from '@styles/spaceCVA';
import '../../../../public/fonts/fontface/Anzu.css';

export default function EventIdPage() {
  const isoDateString = '2025-02-01';
  const time = {
    start: '10:00',
    end: '12:30',
  };
  const eventInfoItems = ['定員：10名', '参加費：3000円'];
  return (
    <section>
      <LazyLoadFontFace fontName="GenJyuuGoXP-R" />
      <LazyLoadFontFace fontName="GenJyuuGoXP-M" />
      <LazyLoadFontFace fontName="LovelyJackie" />

      <ServerSideVisual
        alt="地元野菜を並べて料理しているイラスト"
        src={cookingIMG}
        objectPosClassName={css({
          objectPos: { tab: 'center 35%', pc: 'center 25%' },
        })}
      />

      <InnerSiteLayout>
        <PageTitle
          isJP
          pageName="イベント詳細"
        />

        <SectionTitle
          isJP
          withLeaf={false}
          className={spaceCVA({ row: 'firstSectionJP', inner: 'x' })}>
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
          title="内容"
          className={spaceCVA({ row: 'section' })}>
          <ul
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                d: 'grid',
                gridAutoColumns: 'minmax(auto, max-content)',
                rowGap: '{spacing.inner.x}',
              }),
            )}>
            {[
              '野菜の美味しさを引き出す下ごしらえテクニック',
              '旬の味わいを楽しむ簡単スープ、簡単パスタ作り',
              '誰でも簡単！自宅で楽しめるレシピをプレゼント',
              '参加特典：次回カフェで使える10%割引クーポン',
            ].map((text, i) => {
              const isBonus = i === 3;
              return (
                <li key={text}>
                  <EventContent
                    isBonus={isBonus}
                    className={cx(fontCVA({ body: 'eventContent' }), css({ pd: '.25rem .75rem' }))}>
                    <p>{text}</p>
                  </EventContent>
                </li>
              );
            })}
          </ul>
        </FeatureSection>
        <FeatureSection
          isJP
          title="過去イベントの様子"
          className={spaceCVA({ row: 'section' })}>
          <ul
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                d: 'grid',
                gridTemplateColumns: { tab: '1fr 1fr', pc: 'repeat(3, 1fr)' },
                gap: '{spacing.inner.x}',
              }),
            )}>
            {[cookingHistory1IMG, cookingHistory2IMG].map((img, i) => {
              const alt = '過去開催の様子';
              return (
                <BgImageLikeBox
                  key={i}
                  as="li"
                  src={img}
                  alt={`${alt}${i}`}
                  boxClassName={css({
                    radius: '4px',
                    aspectRatio: '16/9',
                  })}
                />
              );
            })}
          </ul>
        </FeatureSection>
        <FeatureSection
          isJP
          title="参加した方の声"
          className={spaceCVA({ row: 'section' })}>
          <ul
            className={cx(
              spaceCVA({ inner: 'x' }),
              css({
                d: 'grid',
                gridAutoColumns: 'minmax(auto, max-content)',
                rowGap: '{spacing.inner.x}',
              }),
            )}>
            {[
              [
                '野菜の魅力を再発見！',
                '普段何気なく使っていた野菜が、下ごしらえ次第でこんなに美味しくなるなんて感動しました！',
              ],
              ['ついていけなかった', '説明が早いときがあり、料理の仕上がりが思ったよりイマイチになってしまいました。'],
              [
                '簡単レシピで料理が楽しい！',
                '料理初心者の私でも簡単に作れるレシピで、自宅でも再現するのが楽しみです。',
              ],
            ].map((textEntry, i) => {
              const [title, body] = textEntry;
              return (
                <li key={i}>
                  <EventContent>
                    <div
                      className={css({
                        pd: '.5rem .75rem',
                      })}>
                      <p
                        className={cx(
                          css({
                            fontFamily: 'GenJyuuGoXP-M',
                            lineHeight: '1.75',
                          }),
                        )}>
                        {title}
                      </p>
                      <Body>{body}</Body>
                    </div>
                  </EventContent>
                </li>
              );
            })}
          </ul>
        </FeatureSection>
        <FeatureSection
          isJP
          title="お申し込み"
          className={spaceCVA({ row: 'section' })}>
          <div className={spaceCVA({ inner: 'x' })}>
            <div
              className={css({
                py: '1rem',
                d: 'grid',
                gridTemplateColumns: 'auto 1fr',
                alignItems: 'end',
                columnGap: '.5rem',
                mb: '1rem',
              })}>
              <EventDate
                viewHeader
                isoDateString={isoDateString}
                time={time}
              />
              <WithLeafList texts={['地元野菜を楽しむ料理教室', ...eventInfoItems]} />
            </div>
            <ul className={css({ mb: '2rem' })}>
              {[
                'お申し込み期限は、開催日の1週間前までとなります',
                'キャンセルは3日前までに、ご案内メール内のキャンセルフォームからお願いいたします',
                '参加費のお支払いは、店舗で受付時にお願いしております',
              ].map((text, i) => {
                return (
                  <li
                    key={i}
                    className={css({
                      '&+&': {
                        mt: '1rem',
                      },
                    })}>
                    <EventFormInfo>{text}</EventFormInfo>
                  </li>
                );
              })}
            </ul>
            <EventForm />
          </div>
        </FeatureSection>
      </InnerSiteLayout>
    </section>
  );
}
