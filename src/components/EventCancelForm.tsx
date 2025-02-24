'use client';

import EventCancelResponseModal, { eventCancelResponseModalID } from '@components/EventCancelResponseModal';
import FormSending from '@components/FormSending';
import InputText from '@components/InputText';
import { openDialog } from '@helpers/openDialog';
import { css, cx } from '@styled-system/css';
import { btnCVA } from '@styles/btnCVA';
import { useState } from 'react';

const wpApiBaseUrl = process.env.NEXT_PUBLIC_WP_API_BASE_URL;

interface Props extends React.ComponentPropsWithoutRef<'form'> {}
export default function EventCancelForm({}: Props) {
  const [valid, setValid] = useState<boolean | null>(null);
  const [resStatus, setResStatus] = useState<string>('');
  const [isSending, setSending] = useState<boolean>(false);

  return (
    <>
      <form
        id="cancel"
        onSubmit={async e => {
          e.preventDefault();
          const formDOM = document.forms[0];
          const formData = new FormData(formDOM);
          const uuid = formData.get('uuid') as string;

          if (uuid === '') {
            setValid(false);
            return;
          }
          setValid(true);

          setSending(true);
          const res = await fetch(`${wpApiBaseUrl}/reservation/v1/cancel/${uuid}`, {
            method: 'DELETE',
          }).finally(() => {
            setSending(false);
          });

          if (res.ok) {
            setResStatus('ok');
          } else {
            setResStatus('error');
          }

          openDialog(eventCancelResponseModalID);
        }}>
        <InputText
          isValid={valid}
          name="uuid"
          label="キャンセルID"
          labelInfo="（ ご案内メール内記載のID ）"
          className={css({
            mb: '2rem',
          })}
        />
        <button
          type="submit"
          className={cx(
            btnCVA({ eventForm: 'submitCheck' }),
            css({
              ml: { tab: 'calc(33.3% - 6rem)' },
              mx: { minToTab: 'auto' },
            }),
          )}>
          キャンセルする
        </button>
      </form>
      <EventCancelResponseModal resStatus={resStatus} />
      {isSending && <FormSending />}
    </>
  );
}
