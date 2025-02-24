'use client';
import { eventFormID, type EventFormData } from '@components/EventForm';
import FormModalBody from '@components/FormModalBody';
import { closeDialog } from '@helpers/closeDialog';
import { css } from '@styled-system/css';
import { btnCVA } from '@styles/btnCVA';

export const eventSubmitCheckModalID = 'event-submit-check';
interface Props extends React.ComponentPropsWithoutRef<'dialog'> {
  eventFormData: EventFormData | null;
}
export default function EventSubmitCheckModal({ eventFormData }: Props) {
  return (
    <FormModalBody modalID={eventSubmitCheckModalID}>
      <p
        className={css({
          fontFamily: 'GenJyuuGoXP-M',
          fontSize: '1.5rem',
          textAlign: 'center',
          color: '{colors.base}',
          mb: '1rem',
        })}>
        お申し込み確認
      </p>
      <p
        className={css({
          fontFamily: 'GenJyuuGoXP-M',
          textAlign: 'center',
          color: '{colors.base}',
          mb: '2rem',
        })}>
        下記の内容で送信します
      </p>
      {eventFormData && (
        <div
          className={css({
            d: 'grid',
            rowGap: '1rem',
            justifyContent: 'center',
            pd: '2rem 1rem',
            bgColor: '{colors.base}',
            radius: '4px',
            mb: '2rem',
            fontFamily: 'GenJyuuGoXP-M',
            lineHeight: '1.25',
          })}>
          <div>
            <p>お名前</p>
            <p className={css({ fontFamily: 'GenJyuuGoXP-R' })}>{eventFormData.name}</p>
          </div>
          <div>
            <p>メールアドレス</p>
            <p className={css({ fontFamily: 'GenJyuuGoXP-R' })}>{eventFormData.email}</p>
          </div>
          <div>
            <p>参加人数</p>
            <p className={css({ fontFamily: 'GenJyuuGoXP-R' })}>
              {eventFormData.participants}
              <span className={css({ fontSize: '.75rem', ml: '.125rem', verticalAlign: 'middle' })}>人</span>
            </p>
          </div>
        </div>
      )}
      <div
        className={css({
          d: 'flex',
          justifyContent: 'center',
          columnGap: '1rem',
        })}>
        <button
          type="button"
          onClick={() => {
            closeDialog(eventSubmitCheckModalID);
          }}
          className={btnCVA({ eventForm: 'submitCancel' })}>
          修正する
        </button>
        <button
          type="submit"
          onClick={() => {
            closeDialog(eventSubmitCheckModalID);
          }}
          form={eventFormID}
          className={btnCVA({ eventForm: 'submit' })}>
          申し込む
        </button>
      </div>
    </FormModalBody>
  );
}
