'use client';
import MenuBtn from '@components/MenuBtn';
import { css, cx } from '@styled-system/css';
import { useEffect, useRef } from 'react';
import { useMenuState, type MenuTypes } from '../stores/menuStore';

interface Props extends React.ComponentPropsWithoutRef<'nav'> {
  menuType: MenuTypes;
  bodyClassName?: string;
}
export default function UiMenuBody({ className, bodyClassName, menuType, children }: Props) {
  const navRef = useRef<HTMLElement | null>(null);
  const isMenuOpen = useMenuState(menuType);

  useEffect(() => {
    const navDOM = navRef.current;
    if (navDOM) {
      const attrName = 'data-menu-open';
      isMenuOpen ? navDOM.setAttribute(attrName, '') : navDOM.removeAttribute(attrName);
    }
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={cx(
        className,
        css({
          minW: '200px',
          '&[data-menu-open]': {
            d: 'block',
          },
          '&[data-menu-open]::before': {
            content: '""',
            pos: 'fixed',
            inset: 0,
            bgColor: 'rgba(0, 0, 0, .8)',
            zIndex: '-1',
          },
        }),
      )}>
      <div
        className={cx(
          bodyClassName,
          css({
            w: '100%',
            minH: '100vh',
          }),
        )}>
        <div
          className={cx(
            isMenuOpen ? css({ pr: '3rem' }) : css({ pr: '{spacing.inner.x}' }),
            css({
              w: 'fit-content',
              pl: '{spacing.inner.x}',
              pt: '.5rem',
            }),
          )}>
          <MenuBtn
            menuType={menuType}
            btnType="close"
            className={css({
              pos: 'fixed',
              top: '{spacing.menuBtnTopPos}',
              right: '0',
              zIndex: '1200',
            })}
          />
          {children}
        </div>
      </div>
    </nav>
  );
}
