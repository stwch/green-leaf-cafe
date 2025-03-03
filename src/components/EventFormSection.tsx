'use client';

import EventDate from '@components/EventDate';
import EventForm from '@components/EventForm';
import EventFormInfo from '@components/EventFormInfo';
import EventInfo from '@components/EventInfo';
import FeatureSection from '@components/FeatureSection';
import Loading from '@components/Loading';
import useCurrentParticipants from '@hooks/useCurrentParticipants';
import { css } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';
import { useEffect, useState } from 'react';

type ExtendsProps = React.ComponentPropsWithoutRef<'section'>;
type Props = { eventData: any; eventID: number; isClosed?: boolean } & ExtendsProps;
export default function EventFormSection({ eventData, eventID, isClosed }: Props) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [remainingCapacity, setRemainingCapacity] = useState(0);

  const { event_name, event_day, event_start_time, event_end_time, event_price, event_capacity } = eventData;
  const { data, isLoading } = useCurrentParticipants(eventID);

  useEffect(() => {
    if (!isLoading) {
      const capacityNumber = Number(event_capacity);
      const remainingCapacity = capacityNumber - data.current;

      if (capacityNumber === remainingCapacity) setIsAvailable(false);
      setRemainingCapacity(remainingCapacity);
    }
  }, [isLoading]);

  return (
    <FeatureSection
      isJP
      title="お申し込み"
      className={spaceCVA({ row: 'section' })}>
      <div className={spaceCVA({ inner: 'x' })}>
        {isLoading ? (
          <div className={css({ h: '100vh' })}>
            <Loading className={css({ w: '2rem' })} />
          </div>
        ) : isAvailable ? (
          isClosed ? (
            <p
              className={css({
                pt: '1rem',
                fontFamily: 'Anzu',
                fontSize: '1.5rem',
                lineHeight: '1.5',
              })}>
              このイベントの予約受付は終了しました。
              <br />
              予約は開催日の1週間前まで受け付けております。
            </p>
          ) : (
            <>
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
                  isoDateString={event_day}
                  time={{
                    start: event_start_time,
                    end: event_end_time,
                  }}
                />
                <EventInfo
                  eventName={event_name}
                  capacity={event_capacity}
                  remainingCapacity={remainingCapacity}
                  price={event_price}
                />
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
              <EventForm
                eventID={eventID}
                remainingCapacity={remainingCapacity}
                eventName={event_name}
              />
            </>
          )
        ) : (
          <p
            className={css({
              pt: '1rem',
              fontFamily: 'Anzu',
              fontSize: '1.5rem',
              lineHeight: '1.5',
            })}>
            ご好評につき、定員に達しました。
            <br />
            たくさんのお申し込み、ありがとうございました！
          </p>
        )}
      </div>
    </FeatureSection>
  );
}
