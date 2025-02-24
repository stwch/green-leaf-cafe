'use client';
import Body from '@components/Body';
import FormModalBody from '@components/FormModalBody';
import { closeDialog } from '@helpers/closeDialog';
import { css } from '@styled-system/css';
import { btnCVA } from '@styles/btnCVA';

export const eventCancelResponseModalID = 'event-cancel-res';
interface Props extends React.ComponentPropsWithoutRef<'dialog'> {
  resStatus: string;
}
export default function EventCancelResponseModal({ resStatus }: Props) {
  const isOk = resStatus === 'ok';
  const isError = resStatus === 'error';
  return (
    <FormModalBody modalID={eventCancelResponseModalID}>
      <div
        className={css({
          radius: '4px',
          bgColor: '{colors.base}',
          pd: '1rem',
          mb: '2rem',
        })}>
        {isOk && (
          <>
            <Body>予約をキャンセルしました。</Body>
            <Body>またのご参加をお待ちしております。</Body>
          </>
        )}
        {isError && (
          <>
            <Body>予約のキャンセルに失敗しました。</Body>
            <Body>キャンセルID が間違っているか、既にキャンセル済みです。</Body>
          </>
        )}
      </div>
      <div
        className={css({
          d: 'flex',
          justifyContent: 'center',
        })}>
        <button
          type="button"
          onClick={() => {
            closeDialog(eventCancelResponseModalID);
          }}
          className={btnCVA({ eventForm: 'submitCancel' })}>
          閉じる
        </button>
      </div>
    </FormModalBody>
  );
}
