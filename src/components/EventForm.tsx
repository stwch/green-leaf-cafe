'use client';

import InputText from '@components/InputText';
import ParticipantSelector from '@components/ParticipantSelector';
import PrantSVG from '@components/svg/PrantSVG';
import { css } from '@styled-system/css';
import type { FormEvent } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'form'> {}
export default function EventForm({}: Props) {
  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
      }}>
      <InputText
        label="お名前"
        labelInfo="受付時に使用いたします"
        className={css({
          mb: '1rem',
        })}
      />
      <InputText
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
        <ParticipantSelector />
        <PrantSVG className={css({ w: '3rem', color: '{colors.main}' })} />
      </div>
      <button
        type="button"
        className={css({
          fontFamily: 'GenJyuuGoXP-M',
          d: 'block',
          w: 'fit-content',
          pd: '.5rem 1rem',
          color: '{colors.base}',
          bgColor: '{colors.accent}',
          radius: '100px',
          ml: { tab: 'calc(33.3% - 6rem)' },
          mx: { minToTab: 'auto' },
          boxShadow: '{shadows.btn}',
        })}>
        申し込む
      </button>
    </form>
  );
}
