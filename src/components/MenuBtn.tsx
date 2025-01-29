'use client';
import blogMenuSVG from '@images/icon/blog.svg';
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
            textAlign: 'center',
          })}>
          {label}
        </span>
      </button>
    )
  );
}

interface BtnProps {
  iconData: ReturnType<typeof getImageProps>['props'];
  label: string;
}
function _getIcon(menuType: MenuTypes, isOpenBtn: boolean) {
  if (!menuType) throw new Error('menuType は必須です');

  const closeBtn: BtnProps = {
    iconData: getImageProps({ src: closeSVG, alt: 'メニューを閉じる' }).props,
    label: '閉じる',
  };
  const openBtn = _createOpenBtn(menuType);

  return isOpenBtn ? openBtn : closeBtn;
}

function _createOpenBtn(menuType: MenuTypes): BtnProps {
  const commonAlt = 'メニューを開く';
  switch (menuType) {
    case 'site': {
      return {
        iconData: getImageProps({ src: siteMenuSVG, alt: `サイト${commonAlt}` }).props,
        label: 'メニュー',
      };
    }
    case 'blog': {
      return {
        iconData: getImageProps({ src: blogMenuSVG, alt: `ブログ${commonAlt}` }).props,
        label: 'カテゴリ',
      };
    }
  }
}
