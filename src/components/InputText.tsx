import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'label'> {
  label: string;
  labelInfo: string;
}
export default function InputText({ label, labelInfo, className }: Props) {
  return (
    <label
      className={cx(
        className,
        css({
          d: 'block',
          w: { tab: '66.6%' },
          bgColor: '{colors.main}',
          radius: '4px',
          pd: '.25rem',
        }),
      )}>
      <span
        className={css({
          d: 'grid',
          gridTemplateColumns: 'auto 1fr',
          columnGap: '.25rem',
          alignItems: 'end',
          mb: '.25rem',
        })}>
        <span className={fontCVA({ label: 'form' })}>{label}</span>
        <span
          className={cx(
            css({
              fontFamily: 'GenJyuuGoXP-R',
              fontSize: '.75rem',
            }),
          )}>
          {labelInfo}
        </span>
      </span>
      <input
        type="text"
        className={css({
          d: 'block',
          w: '100%',
          bgColor: '{colors.base}',
          pd: '.25rem .5rem',
          radius: '4px',
        })}
      />
    </label>
  );
}
