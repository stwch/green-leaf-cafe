'use client';

import EventSubmitCheckModal, { eventSubmitCheckModalID } from '@components/EventSubmitCheckModal';
import EventSubmitResponseModal, { eventSubmitResponseModalID } from '@components/EventSubmitResponseModal';
import FormSending from '@components/FormSending';
import InputText from '@components/InputText';
import ParticipantSelector from '@components/ParticipantSelector';
import PrantSVG from '@components/svg/PrantSVG';
import { openDialog } from '@helpers/openDialog';
import { css, cx } from '@styled-system/css';
import { btnCVA } from '@styles/btnCVA';
import { useState, type FormEvent } from 'react';

const wpApiBaseUrl = process.env.NEXT_PUBLIC_WP_API_BASE_URL;
export const eventFormID = 'event-form';
export type EventFormData = {
  name: string;
  email: string;
  participants: string;
  eventID: string;
  eventName: string;
};
type EventFormValid = {
  name: boolean | null;
  email: boolean | null;
};
interface Props extends React.ComponentPropsWithoutRef<'form'> {
  eventID: string | number;
  eventName: string;
  remainingCapacity: number;
}
export default function EventForm({ eventID, eventName, remainingCapacity }: Props) {
  const [eventFormData, setFormData] = useState<EventFormData | null>(null);
  const [valid, setValid] = useState<EventFormValid>({ name: null, email: null });
  const [resStatus, setResStatus] = useState<string>('');
  const [isSending, setSending] = useState<boolean>(false);
  return (
    <form
      id={eventFormID}
      onSubmit={async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        const res = await fetch(`${wpApiBaseUrl}/reservation/v1/book`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(eventFormData),
        }).finally(() => {
          setSending(false);
          openDialog(eventSubmitResponseModalID);
        });
        console.log(eventFormData);

        if (res.ok) {
          setResStatus('ok');
        } else if (res.status === 409) {
          setResStatus('409');
        } else {
          setResStatus('error');
        }
      }}>
      <InputText
        isValid={valid.name}
        name="name"
        label="お名前"
        labelInfo="受付時に使用いたします"
        className={css({
          mb: '1rem',
        })}
      />
      <InputText
        isValid={valid.email}
        name="email"
        label="メールアドレス"
        labelInfo="ご案内メールをお届けするために必要です"
        className={css({
          mb: '1rem',
        })}
      />
      <div
        className={css({
          d: 'grid',
          gridTemplateColumns: 'auto 1fr',
          columnGap: { base: '1rem', pc: '4rem' },
          alignItems: 'end',
          mb: '2rem',
        })}>
        <div
          className={css({
            pos: 'relative',
          })}>
          <ParticipantSelector remainingCapacity={remainingCapacity} />
          <p
            className={css({
              fontFamily: 'GeJyuuGoXP-M',
              w: '100%',
              pos: 'absolute',
              top: '.25rem',
              left: 'calc(100% + .25rem)',
            })}>
            あと{remainingCapacity}名
          </p>
        </div>
        <PrantSVG className={css({ w: '3rem', color: '{colors.main}' })} />
      </div>
      <button
        type="button"
        onClick={() => {
          const formDOM = document.forms[0];
          const formData = _getEventFormData(formDOM);

          const name = formData.get('name') as string;
          const email = formData.get('email') as string;
          const existsName = name !== '';
          const existsEmail = email !== '';
          setValid({
            name: existsName,
            email: existsEmail,
          });
          if (!existsName || !existsEmail) return;

          const participants = formData.get('participants') as string;
          setFormData({ name, email, participants, eventID: `${eventID}`, eventName });

          const dialogDOM = document.getElementById(eventSubmitCheckModalID) as HTMLDialogElement;
          dialogDOM.showModal();
        }}
        className={cx(
          btnCVA({ eventForm: 'submitCheck' }),
          css({
            ml: { tab: 'calc(33.3% - 6rem)' },
            mx: { minToTab: 'auto' },
          }),
        )}>
        お申し込み確認
      </button>
      <EventSubmitCheckModal eventFormData={eventFormData} />
      <EventSubmitResponseModal resStatus={resStatus} />
      {isSending && <FormSending />}
    </form>
  );
}

function _getEventFormData(formDOM: HTMLFormElement) {
  const formData = new FormData(formDOM);
  const participants = formDOM.querySelector<HTMLDivElement>('#participants')?.dataset.value;
  if (!participants) throw new Error();
  formData.append('participants', participants);
  return formData;
}
