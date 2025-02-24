import { css, cx } from '@styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'dialog'> {
  modalID: string;
}
export default function FormModalBody({ children, modalID, className }: Props) {
  return (
    <dialog
      id={modalID}
      className={cx(
        className,
        css({
          w: { base: '95%', tab: 'fit-content' },
          pd: '2rem 1rem',
          bgColor: '{colors.brown}',
          radius: '4px',
          d: 'none',
          '&[open]': {
            d: 'block',
            pos: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          '&::backdrop': {
            bgColor: 'rgba(0, 0, 0, .5)',
          },
        }),
      )}>
      {children}
    </dialog>
  );
}
