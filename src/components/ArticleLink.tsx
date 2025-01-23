import ArticleLabel from '@components/ArticleLabel';
import BgImageLikeBox from '@components/BgImageLikeBox';
import { css, cx } from '@styled-system/css';

export interface ArticleData {
  title: string;
  category: {
    label: string;
    color?: 'main' | 'brown';
  };
  thumb: {
    url: string;
    alt: string;
    width: `${number}` | number;
    height: `${number}` | number;
  };
}
interface Props extends React.ComponentPropsWithoutRef<'a'> {
  article: ArticleData;
}
export default function ArticleLink({ className, article }: Props) {
  const { title, category, thumb } = article;
  const color = category.color;
  const isMainColor = color === 'main' || color === undefined;
  return (
    <a
      href="#"
      className={cx(
        className,
        css({
          d: 'grid',
          bo: isMainColor ? '1px solid {colors.main}' : '1px solid {colors.brown}',
          radius: '4px',
          boxShadow: '{shadows.card}',
          overflow: 'hidden',
        }),
      )}>
      <BgImageLikeBox
        as="span"
        alt={thumb.alt}
        src={thumb.url}
        width={thumb.width}
        height={thumb.height}
        boxClassName={cx(
          className,
          css({
            aspectRatio: '16/9',
            d: 'block',
            pos: 'relative',
          }),
        )}>
        <ArticleLabel
          color={category.color}
          className={css({
            radius: '0 0 0 4px',
            pos: 'absolute',
            top: '0',
            right: '0',
            zIndex: '1',
          })}>
          {category.label}
        </ArticleLabel>
      </BgImageLikeBox>
      <ArticleLabel color={category.color}>{title}</ArticleLabel>
    </a>
  );
}
