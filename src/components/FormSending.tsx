import { css } from '@styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'div'> {}
export default function FormSending({}: Props) {
  return (
    <dialog
      open
      className={css({
        fontFamily: 'GenJyuuGoXP-M',
        lineHeight: '2',
        color: '{colors.base}',
        d: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgColor: 'rgba(0, 0, 0, .5)',
        pos: 'fixed',
        inset: '0',
        zIndex: '100',
      })}>
      <p className={css({ fontSize: '1.5rem' })}>送信中...</p>
      <p>処理に時間がかかる場合があります</p>
    </dialog>
  );
}
