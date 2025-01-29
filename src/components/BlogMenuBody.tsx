'use client';
import CategoryLink from '@components/CategoryLink';
import NavTitle from '@components/NavTitle';
import UiMenuBody from '@components/UiMenuBody';
import logoIMG from '@images/logo.svg';
import { css } from '@styled-system/css';
import Image from 'next/image';

interface Props extends React.ComponentPropsWithoutRef<'nav'> {}
export default function BlogMenuBody({ className }: Props) {
  return (
    <UiMenuBody
      menuType="blog"
      className={className}
      bodyClassName={css({
        bl: '1px solid {colors.brown}',
        minToTab: {
          bgColor: '{colors.base}',
        },
      })}>
      <Image
        alt="GreenLeafCafeのロゴ"
        src={logoIMG}
        className={css({
          w: '6.5rem',
          mb: '1.5rem',
        })}
      />

      <NavTitle
        label="カテゴリー"
        className={css({
          color: '{colors.brown}',
        })}
      />
      <ul>
        {[
          { label: 'イベント告知', count: 5 },
          { label: 'イベントレポート', count: 3 },
          { label: '新メニュー', count: 12 },
          { label: '季節のメニュー', count: 3 },
        ].map(category => {
          const { label, count } = category;
          return (
            <li
              key={label}
              className={css({ '&+&': { mt: '1rem' } })}>
              <CategoryLink
                label={label}
                count={count}
              />
            </li>
          );
        })}
      </ul>
    </UiMenuBody>
  );
}
