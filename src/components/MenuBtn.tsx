'use client';
import closeSVG from '@images/icon/close.svg';
import siteMenuSVG from '@images/icon/site-menu.svg';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';
import Image, { getImageProps } from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';
import { closeMenu, openMenu, useMenuState, type MenuTypes } from '../stores/menuStore';

interface Props extends ComponentPropsWithoutRef<'button'> {
  menuType: MenuTypes;
  btnType: 'open' | 'close';
}
export default function MenuBtn({ className, menuType, btnType }: Props) {
  const isMenuOpen = useMenuState(menuType);
  const isOpenBtn = btnType === 'open';
  const isView = isOpenBtn ? !isMenuOpen : isMenuOpen;
  const { iconData, label } = _getIcon(menuType, isOpenBtn);
  return (
    isView && (
      <button
        type="button"
        onClick={isOpenBtn ? () => openMenu(menuType) : () => closeMenu(menuType)}
        className={cx(
          className,
          fontCVA({ ui: 'menu' }),
          css({
            d: 'grid',
            gridTemplateRows: 'repeat(2, auto)',
            w: '3rem',
            py: '.5rem',
            pl: '.75rem',
            bgColor: '{colors.main}',
            radius: '100px 0 0 100px',
          }),
        )}>
        <Image {...iconData} />
        <span
          className={css({
            d: 'block',
            textAlign: 'right',
            pr: '3px',
          })}>
          {label}
        </span>
      </button>
    )
  );
}

function _getIcon(menuType: MenuTypes, isOpenBtn: boolean) {
  const commonAlt = isOpenBtn ? 'メニューを開く' : 'メニューを閉じる';
  const closeBtn = {
    iconData: getImageProps({ src: closeSVG, alt: `サイト${commonAlt}` }).props,
    label: '閉じる',
  };
  if (menuType === 'site') {
    const openBtn = {
      iconData: getImageProps({ src: siteMenuSVG, alt: `サイト${commonAlt}` }).props,
      label: 'メニュー',
    };
    return isOpenBtn ? openBtn : closeBtn;
  }
  throw new Error('menuType は必須です');
}
