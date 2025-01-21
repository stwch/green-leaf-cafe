'use client';
import { useEffect } from 'react';
import createLazyLoadLinkEl from '../helpers/createLazyLoadLinkEl';

interface Props {
  fontName: `GenJyuuGoXP-${'L' | 'R' | 'M' | 'B'}` | 'Anzu' | 'LovelyJackie';
}
export default function LazyLoadFontFace({ fontName }: Props) {
  useEffect(() => {
    const linkEl = createLazyLoadLinkEl({ rel: 'stylesheet', href: `/fonts/fontface/${fontName}.css` });
    document.head.appendChild(linkEl);

    return () => {
      document.head.removeChild(linkEl);
    };
  }, []);

  return false;
}
