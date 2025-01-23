import type { ArticleData } from '@components/ArticleLink';
import type { StaticImageData } from 'next/image';

//この関数はwordpress の用意が終わるまで一時的に使用する
type Args = {
  title: string;
  category: string;
  staticImg: StaticImageData;
  alt: string;
} & Pick<ArticleData['category'], 'color'>;
export default function createArticleData({ title, category, color, alt, staticImg }: Args): ArticleData {
  return {
    title,
    category: {
      label: category,
      color,
    },
    thumb: {
      url: staticImg.src,
      alt,
      width: staticImg.width,
      height: staticImg.height,
    },
  };
}
