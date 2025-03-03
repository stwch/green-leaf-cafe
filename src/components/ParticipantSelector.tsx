'use client';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import { useState } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  remainingCapacity: number;
}
export default function ParticipantSelector({ className, remainingCapacity }: Props) {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const numbers = Array(remainingCapacity).fill(0);
  return (
    <div
      id="participants"
      role="combobox"
      aria-haspopup="listbox"
      aria-labelledby="参加人数選択"
      aria-expanded={isOpen}
      data-value={value}
      onClick={() => setOpen(!isOpen)}
      className={cx(
        className,
        css({
          d: 'block',
          w: 'fit-content',
          bgColor: '{colors.main}',
          pd: '.25rem .5rem',
          radius: '4px',
          cursor: 'pointer',

          textAlign: 'center',
        }),
      )}>
      <label
        className={cx(
          fontCVA({ label: 'form' }),
          css({
            d: 'block',
            w: 'fit-content',
            mb: '.25rem',
            pointerEvents: 'none',
          }),
        )}>
        参加人数
      </label>
      <div
        className={cx(
          css({
            mx: 'auto',
            bgColor: '{colors.base}',
            radius: '4px',
            pb: '.5rem',
            pos: 'relative',
            zIndex: '1',
            '&::after': {
              content: '""',
              d: 'block',
              w: '.75rem',
              aspectRatio: '2/1',
              radius: '100px',
              bgColor: '{colors.main}',
              mx: 'auto',
              mt: '.5rem',
              clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
            },
          }),
        )}>
        <div
          className={cx(
            fontCVA({ label: 'form' }),
            css({
              pd: '.5rem',
              bb: '1px solid {colors.main}',
            }),
          )}>
          {value}
          <span className={css({ fontSize: '.75rem', verticalAlign: 'bottom' })}>&nbsp;名</span>
        </div>
        {isOpen && (
          <div
            className={css({
              w: '100%',
              pos: 'absolute',
              top: '100%',
              left: '0',
              bgColor: '{colors.base}',
              radius: '4px',
              bo: '2px solid {colors.main}',
            })}>
            {numbers.map((_, i) => {
              const number = i + 1;
              return (
                <div
                  key={number}
                  role="option"
                  onClick={() => {
                    setValue(number);
                    setOpen(false);
                  }}
                  className={css({
                    lineHeight: '1.75',
                    '&+&': {
                      bt: '1px solid {colors.main}',
                    },
                    '&:hover': {
                      bgColor: '{colors.main}',
                    },
                  })}>
                  {number}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
