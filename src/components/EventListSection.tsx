'use client';

import EventLink from '@components/EventLink';
import FeatureSection from '@components/FeatureSection';
import LoadingWithText from '@components/LoadingWithText';
import useEventList from '@hooks/useEventList';
import { css, cx } from '@styled-system/css';
import { spaceCVA } from '@styles/spaceCVA';

interface Props extends React.ComponentPropsWithoutRef<'div'> {}
export default function EventListSection({ className }: Props) {
  const { data, isLoading, error } = useEventList();
  if (isLoading) {
    return (
      <div
        className={cx(
          className,
          spaceCVA({ row: 'section', inner: 'x' }),
          css({
            h: '100vh',
          }),
        )}>
        <LoadingWithText text="イベント取得中" />
      </div>
    );
  }

  const eventData = _extractEventsByMonth(data);
  if (!eventData || error) {
    return (
      <div
        className={css({
          fontFamily: 'Anzu',
          fontSize: '1.5rem',
        })}>
        開催予定のイベントがありませんでした。
      </div>
    );
  }
  console.log(eventData);
  return Object.entries(eventData).map((entry: [string, any[]], i) => {
    const [month, events] = entry;
    const isCurrentMonth = month === 'currentMonth';
    const isFirstLoop = i === 0;
    return (
      <FeatureSection
        key={month}
        isJP
        className={spaceCVA({ row: isFirstLoop ? 'firstSection' : 'section' })}
        title={`${isCurrentMonth ? '今' : '来'}月のイベント`}>
        <div
          className={cx(
            spaceCVA({ inner: 'x' }),
            css({
              d: 'grid',
              gridTemplateColumns: { base: 'repeat(2, 1fr)', tab: 'repeat(3, 1fr)', pc: 'repeat(4, 1fr)' },
              gap: '.5rem',
            }),
          )}>
          {events.map(event => {
            const { event_name, event_day, event_start_time, event_end_time, event_img } = event.acf;
            return (
              <EventLink
                key={event.id}
                href={`/events/detail?eid=${event.id}`}
                name={event_name}
                isoDateString={event_day}
                time={{
                  start: event_start_time,
                  end: event_end_time,
                }}
                alt={event_img.alt && `イベント ${event_name} のサムネイル`}
                src={event_img.url}
              />
            );
          })}
        </div>
      </FeatureSection>
    );
  });
}

interface EventsByMonth {
  currentMonth?: any[];
  nextMonth?: any[];
}
function _extractEventsByMonth(data: any): EventsByMonth | null {
  const result = Object.entries(_getMonth()).reduce((accu, monthEntry) => {
    const [monthKey, month] = monthEntry;
    const events = data[month];
    if (events) accu = { ...accu, [monthKey]: events };
    return accu;
  }, {});

  const isEmpty = Object.keys(result).length === 0;
  return isEmpty ? null : result;
}

function _getMonth() {
  const now = new Date();
  const nextMonthDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const currentMonth = _createYYYY_MM(now);
  const nextMonth = _createYYYY_MM(nextMonthDate);

  return { currentMonth, nextMonth };
}

function _createYYYY_MM(dateObject: Date) {
  const year = dateObject.getFullYear();
  const month = `${dateObject.getMonth() + 1}`.padStart(2, '0'); // `getMonth()` は 0-11 なので +1 し、一桁月なら 0 を付ける
  return `${year}-${month}`;
}
