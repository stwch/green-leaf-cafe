import AccessSection from '@components/AccessSection';
import Footer from '@components/Footer';
import MenuBtn from '@components/MenuBtn';
import SiteMenuBody from '@components/SiteMenuBody';
import { css } from '@styled-system/css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function InnerSiteLayout({ children }: Props) {
  return (
    <>
      <MenuBtn
        menuType="site"
        btnType="open"
        className={css({
          pos: 'fixed',
          top: '{spacing.menuBtnTopPos}',
          right: '0',
          zIndex: '1000',
          tab: {
            d: 'none',
          },
        })}
      />
      <div
        className={css({
          tab: {
            w: '100%',
            d: 'grid',
            gridTemplateColumns: '1fr minmax(0, {breakpoints.pc}) 1fr',
            justifyContent: 'center',
            pos: 'relative',
            '&::before': {
              content: '""',
              d: 'block',
            },
          },
        })}>
        <SiteMenuBody
          className={css({
            minToTab: {
              pos: 'fixed',
              top: '0',
              right: '0',
              zIndex: '1000',
            },
            tab: {
              justifySelf: 'stretch',
              maxH: '100vh',
              pos: 'sticky',
              top: '0',
              right: '0',
              order: '2',
            },
          })}
        />
        <div
          className={css({
            maxW: '{breakpoints.pc}',
            minW: '0',
          })}>
          {children}
          <AccessSection
            className={css({
              minToPc: { mb: '{spacing.row.section}' },
            })}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}
