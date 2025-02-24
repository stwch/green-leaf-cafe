import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'label'> {
  label: string;
  labelInfo: string;
  name: string;
  isValid: boolean | null;
}
export default function InputText({ label, labelInfo, name, isValid, className }: Props) {
  const isDefault = isValid === null;
  const isAttention = !isDefault && !isValid;
  return (
    <label
      className={cx(
        className,
        isAttention && css({ bo: '4px solid {colors.accent}' }),
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
        name={name}
        className={css({
          d: 'block',
          w: '100%',
          bg: '{colors.base}',
          pd: '.25rem .5rem',
          radius: '4px',
          '&:-webkit-autofill': {
            boxShadow: '0 0 0 100px {colors.base} inset',
          },
        })}
      />
      {isAttention && (
        <span
          className={cx(
            css({
              d: 'block',
              mt: '.25rem',
              fontFamily: 'GenJyuuGoXP-M',
              fontSize: '.75rem',
            }),
          )}>
          必須の項目です
        </span>
      )}
    </label>
  );
}
