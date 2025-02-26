import AccessSection from '@components/AccessSection';
import BlogMenuBody from '@components/BlogMenuBody';
import Footer from '@components/Footer';
import MenuBtn from '@components/MenuBtn';
import SiteMenuBody from '@components/SiteMenuBody';
import { css, cx } from '@styled-system/css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isBlogMenu?: boolean;
}
export default function InnerSiteLayout({ children, isBlogMenu }: Props) {
  return (
    <>
      <MenuBtn
        menuType="site"
        btnType="open"
        className={cx(
          !isBlogMenu && css({ tab: { d: 'none' } }),
          css({
            pos: 'fixed',
            top: '{spacing.menuBtnTopPos}',
            right: '0',
            zIndex: '1000',
          }),
        )}
      />
      {isBlogMenu && (
        <MenuBtn
          menuType="blog"
          btnType="open"
          className={css({
            minToTab: {
              pos: 'fixed',
              bottom: '{spacing.menuBtnTopPos}',
              right: '0',
              zIndex: '1000',
            },
            tab: { d: 'none' },
          })}
        />
      )}
      <div
        className={cx(
          css({
            tab: {
              w: '100%',
              d: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, {breakpoints.pc}) 1fr',
              justifyContent: 'center',
              pos: 'relative',
              '&::before': {
                content: '""',
                d: 'block',
              },
            },
          }),
        )}>
        <SiteMenuBody
          className={cx(
            isBlogMenu
              ? css({
                  d: 'none',
                  pos: 'fixed',
                  top: '0',
                  right: '0',
                  zIndex: '1000',
                })
              : css({
                  d: 'none',
                  minToTab: {
                    pos: 'fixed',
                    top: '0',
                    right: '0',
                    zIndex: '1000',
                    maxW: '200px',
                  },
                  tab: {
                    d: 'block',
                    justifySelf: 'stretch',
                    maxH: '100vh',
                    pos: 'sticky',
                    top: '0',
                    right: '0',
                    order: '2',
                  },
                }),
          )}
        />
        {isBlogMenu && (
          <BlogMenuBody
            className={css({
              minToTab: {
                d: 'none',
                pos: 'fixed',
                top: '0',
                right: '0',
                zIndex: '1000',
              },
              tab: {
                d: 'block',
                justifySelf: 'stretch',
                maxH: '100vh',
                pos: 'sticky',
                top: '0',
                right: '0',
                order: '2',
              },
            })}
          />
        )}
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
