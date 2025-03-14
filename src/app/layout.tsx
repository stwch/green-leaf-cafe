import { css } from '@styled-system/css';
import '@styles/index.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={css({
        '&:has(nav[data-menu-open], dialog[open])': { overflow: 'hidden' },
      })}>
      <body
        className={css({
          maxW: '100%',
          fontSize: '16px',
          color: '{colors.text}',
          lineHeight: '1',
          overflowX: 'hidden',
          bgColor: '{colors.base}',
          whiteSpace: 'pre-wrap',
          pos: 'relative',
          '&::after': {
            content: '""',
            pos: 'absolute',
            inset: '0',
            zIndex: '-1',
            bgImage: '{assets.bgPatternImg}',
            bgSize: { base: '75%', pc: '50%' },
            opacity: '0.05',
          },
        })}>
        <main
          className={css({
            pos: 'relative',
            zIndex: '1',
            bgColor: '{colors.base}',
            '&::after': {
              content: '""',
              pos: 'absolute',
              inset: '0',
              zIndex: '-1',
              bgImage: '{assets.bgPatternImg}',
              bgSize: { base: '75%', pc: '50%' },
              opacity: '0.05',
            },
          })}>
          {children}
        </main>
      </body>
    </html>
  );
}
