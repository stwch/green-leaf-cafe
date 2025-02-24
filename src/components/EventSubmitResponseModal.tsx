'use client';
import Body from '@components/Body';
import FormModalBody from '@components/FormModalBody';
import { closeDialog } from '@helpers/closeDialog';
import { css } from '@styled-system/css';
import { btnCVA } from '@styles/btnCVA';

export const eventSubmitResponseModalID = 'event-submit-res';
interface Props extends React.ComponentPropsWithoutRef<'dialog'> {
  resStatus: string;
}
export default function EventSubmitResponseModal({ resStatus }: Props) {
  const isOk = resStatus === 'ok';
  const isDuplicate = resStatus === '409';
  const isError = resStatus === 'error';
  return (
    <FormModalBody modalID={eventSubmitResponseModalID}>
      <div
        className={css({
          radius: '4px',
          bgColor: '{colors.base}',
          pd: '1rem',
          mb: '2rem',
        })}>
        {isOk && (
          <>
            <Body>お申し込みありがとうございます。</Body>
            <Body>ご入力いただいたメールアドレス宛に、ご案内メールを送信しました。</Body>
          </>
        )}
        {isDuplicate && <Body>お客様はこのイベントに申し込み済みです。</Body>}
        {isError && (
          <>
            <Body>予期せぬエラーが発生し、申し込みに失敗しました。</Body>
            <Body>お手数ですが、時間を置いて再度お試しください。</Body>
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
            closeDialog(eventSubmitResponseModalID);
          }}
          className={btnCVA({ eventForm: 'submitCancel' })}>
          閉じる
        </button>
      </div>
    </FormModalBody>
  );
}
