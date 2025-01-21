'use client';
import LogoWithBg from '@components/LogoWithBg';
import MenuBtn from '@components/MenuBtn';
import NavLink from '@components/NavLink';
import NavTitle from '@components/NavTitle';
import LeafSVG from '@components/svg/LeafSVG';
import { css, cx } from '@styled-system/css';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useMenuState } from '../stores/menuStore';

function getFirstSegment(path: string) {
  // トップページの判定
  if (path === '/') {
    return 'top';
  }

  // スラッシュで分割して最初のセグメントを取得
  const segments = path.split('/').filter(segment => segment !== '');
  return segments.length > 0 ? segments[0] : 'top';
}

interface Props extends React.ComponentPropsWithoutRef<'nav'> {}
export default function SiteMenuBody({ className }: Props) {
  const navRef = useRef<HTMLElement | null>(null);
  const firstSegment = getFirstSegment(usePathname());
  const isMenuOpen = useMenuState('site');
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
          w: '100%',
          d: { base: 'none', tab: 'block' },
          '&[data-menu-open]': {
            d: 'block',
          },
          minToTab: {
            maxW: '200px',
            '&[data-menu-open]::before': {
              content: '""',
              pos: 'fixed',
              inset: 0,
              bgColor: 'rgba(0, 0, 0, .8)',
              zIndex: '1',
            },
          },
        }),
      )}>
      <div
        className={css({
          w: '100%',
          minH: '100vh',
          bgColor: '{colors.brown}',
          pos: 'relative',
          zIndex: '1',
          '&::after': {
            content: '""',
            pos: 'absolute',
            inset: '0',
            zIndex: '-1',
            bgImage: '{assets.bgPatternImg}',
            bgSize: '150%',
            opacity: '0.1',
          },
        })}>
        <div
          className={css({
            w: 'fit-content',
            px: '{spacing.inner.x}',
            pt: '.5rem',
          })}>
          <LogoWithBg
            className={css({
              w: '7.5rem',
              mb: '1.5rem',
            })}
          />
          <MenuBtn
            menuType="site"
            btnType="close"
            className={css({
              pos: 'fixed',
              top: '{spacing.menuBtnTopPos}',
              right: '0',
              zIndex: '1200',
            })}
          />
          <NavTitle label="ページ一覧" />
          <ul>
            <li className={css({ '&+&': { mt: '1.5rem' } })}>
              <NavLink
                href="/"
                label="トップ"
                SVGComponent={LeafSVG}
                isCurrent={firstSegment === 'top'}
              />
            </li>
            <li className={css({ '&+&': { mt: '1.5rem' } })}>
              <NavLink
                href="/menu"
                label="メニュー"
                SVGComponent={LeafSVG}
                isCurrent={firstSegment === 'menu'}
              />
            </li>
            <li className={css({ '&+&': { mt: '1.5rem' } })}>
              <NavLink
                href="/events"
                label="イベント"
                SVGComponent={LeafSVG}
                isCurrent={firstSegment === 'events'}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
