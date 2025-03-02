'use client';

import Body from '@components/Body';
import EventContent from '@components/EventContent';
import FeatureSection from '@components/FeatureSection';
import InnerSiteLayout from '@components/InnerSiteLayout';
import PageTitle from '@components/PageTitle';
import SectionTitle from '@components/SectionTitle';
import ServerSideVisual from '@components/ServerSideVisual';
import useEvent from '@hooks/useEvent';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import { spaceCVA } from '@styles/spaceCVA';
import { useSearchParams } from 'next/navigation';

import CoverImg from '@components/CoverImg';
import CoverImgBox from '@components/CoverImgBox';
import EventDate from '@components/EventDate';
import EventFormInfo from '@components/EventFormInfo';
import EventFormSection from '@components/EventFormSection';
import EventInfo from '@components/EventInfo';
import LoadingWithText from '@components/LoadingWithText';

interface Props extends React.ComponentPropsWithoutRef<'div'> {}
export default function EventDetail({}: Props) {
  const eid = useSearchParams().get('eid');
  const eventRes = useEvent(eid);
  if (!eid || !eventRes) {
    return (
      <section className={spaceCVA({ row: 'firstSection', inner: 'x' })}>
        <h2
          className={css({
            fontFamily: 'Anzu',
            fontSize: '2.5rem',
            py: '1rem',
          })}>
          イベントを取得できません
        </h2>
        <Body className={css({ mb: '1.5rem' })}>お手数ですが、イベント一覧ページから入り直してみてください</Body>
        <a
          href="/events"
          className={css({
            fontFamily: 'GenJyuuGoXP-R',
            pd: '.25rem 1rem',
            radius: '4px',
            bgColor: '{colors.main}',
          })}>
          イベント一覧ページ
        </a>
      </section>
    );
  }
  const { data, isLoading, error } = eventRes;
  if (error) {
    return (
      <section className={spaceCVA({ row: 'firstSection', inner: 'x' })}>
        <h2
          className={css({
            fontFamily: 'Anzu',
            fontSize: '2.5rem',
            py: '1rem',
          })}>
          イベントを取得できませんでした
        </h2>
        <Body className={css({ mb: '1.5rem' })}>
          通信エラーや、メンテナンス中の可能性があります。
          <br />
          時間を置いて再度お試しください。
        </Body>
        <a
          href="/events"
          className={css({
            fontFamily: 'GenJyuuGoXP-R',
            pd: '.25rem 1rem',
            radius: '4px',
            bgColor: '{colors.main}',
          })}>
          イベント一覧ページ
        </a>
      </section>
    );
  }
  if (isLoading) {
    return (
      <div
        className={css({
          h: '100vh',
          d: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}>
        <LoadingWithText text="データ取得中" />
      </div>
    );
  }
  const { acf: info, scf: contents } = data;
  const eventName = info.event_name;
  const eventImg = info.event_img;
  const eventContents = contents.event_contents;
  const eventBonuses = contents.event_bonuses;
  const eventVoices = contents.event_voices;
  const eventHistories = contents.event_history_imgs;
  console.log(data);
  return (
    <>
      <ServerSideVisual
        alt={eventImg.alt ?? `${eventName} のイメージ画像`}
        src={eventImg.url}
        objectPosClassName={css({
          objectPos: { tab: 'center 30%', pc: 'center 25%' },
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
          {eventName}
        </SectionTitle>

        <FeatureSection
          isJP
          title="どんなイベント？"
          className={spaceCVA({ row: 'section' })}>
          <Body className={cx(spaceCVA({ inner: 'x' }))}>{info.event_about}</Body>
        </FeatureSection>

        {(eventContents || eventBonuses) && (
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
              {eventContents &&
                eventContents.map((content: any, i: number) => {
                  const { event_contents_body } = content;
                  return (
                    <li key={i}>
                      <EventContent className={cx(fontCVA({ body: 'eventContent' }), css({ pd: '.25rem .75rem' }))}>
                        <p>{event_contents_body}</p>
                      </EventContent>
                    </li>
                  );
                })}
              {eventBonuses &&
                eventBonuses.map((bonus: any, i: number) => {
                  const { event_bonus } = bonus;
                  return (
                    <li key={i}>
                      <EventContent
                        isBonus
                        className={cx(fontCVA({ body: 'eventContent' }), css({ pd: '.25rem .75rem' }))}>
                        <p>{event_bonus}</p>
                      </EventContent>
                    </li>
                  );
                })}
            </ul>
          </FeatureSection>
        )}
        {eventHistories && (
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
              {eventHistories.map((img: any, i: number) => {
                const { url, alt } = img;
                return (
                  <CoverImgBox
                    key={i}
                    as="li"
                    boxSizeClassName={css({
                      radius: '4px',
                      aspectRatio: '16/9',
                    })}>
                    <CoverImg
                      src={url}
                      alt={alt ? alt : `過去開催の様子-${i}`}
                    />
                  </CoverImgBox>
                );
              })}
            </ul>
          </FeatureSection>
        )}
        {eventVoices && (
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
              {eventVoices.map((voiceEntry: any, i: number) => {
                const { voice_title, voice_body } = voiceEntry;
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
                          {voice_title}
                        </p>
                        <Body>{voice_body}</Body>
                      </div>
                    </EventContent>
                  </li>
                );
              })}
            </ul>
          </FeatureSection>
        )}
        {info.require_reserve ? (
          <EventFormSection
            eventID={data.id}
            eventData={info}
            isClosed={data.is_closed}
          />
        ) : (
          <FeatureSection
            isJP
            title="事前のお申し込みは不要です"
            className={spaceCVA({ row: 'section', inner: 'x' })}>
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
                isoDateString={info.event_day}
                time={{
                  start: info.event_start_time,
                  end: info.event_end_time,
                }}
              />
              <EventInfo eventName={eventName} />
            </div>
            <ul className={css({ mb: '2rem' })}>
              {['開催時間内であれば、いつでもご来場いただけます', 'お時間に余裕を持ってお越しください'].map(
                (text, i) => {
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
                },
              )}
            </ul>
          </FeatureSection>
        )}
      </InnerSiteLayout>
    </>
  );
}
