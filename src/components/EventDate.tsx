import type EventLink from '@components/EventLink';
import getDateInfo from '@helpers/getDateInfo';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import type { ComponentProps } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  viewHeader?: boolean;
}
type EventDateProps = Pick<ComponentProps<typeof EventLink>, 'isoDateString' | 'time'>;
export default function EventDate({ className, isoDateString, time, viewHeader }: Props & EventDateProps) {
  const { day, month, isNormalDay, isHoliday, isSaturDay, isSunDay } = getDateInfo(isoDateString);
  const isHolidayColor = isSunDay || isHoliday;
  return (
    <div
      className={cx(
        className,
        isSaturDay && css({ bgColor: '{colors.saturday}' }),
        isHolidayColor && css({ bgColor: '{colors.sunday}' }),
        isNormalDay && css({ bgColor: '{colors.brown}' }),
        css({
          w: 'fit-content',
          radius: '4px',
          pd: '.5rem .25rem',
          color: '{colors.base}',
        }),
      )}>
      {viewHeader && (
        <p
          className={cx(
            isSaturDay && css({ color: '{colors.saturday}' }),
            isHolidayColor && css({ color: '{colors.sunday}' }),
            isNormalDay && css({ color: '{colors.brown}' }),
            css({
              bgColor: '{colors.base}',
              radius: '4px',
              fontFamily: 'GenJyuuGoXP-M',
              lineHeight: '1.25',
              mb: '.375rem',
            }),
          )}>
          開催日時
        </p>
      )}
      <p
        className={cx(
          fontCVA({ link: 'eventDate' }),
          css({
            mb: '.375rem',
          }),
        )}>
        {month}/{day.number}
        {`(${day.name})`}
      </p>
      <p className={fontCVA({ link: 'eventTime' })}>
        {time.start}～{time.end}
      </p>
    </div>
  );
}
