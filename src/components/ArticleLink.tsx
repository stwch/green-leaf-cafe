import ArticleLabel from '@components/ArticleLabel';
import BgImageLikeBox from '@components/BgImageLikeBox';
import eventImg from '@images/catch/event-cooking.webp';
import { css, cx } from '@styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'a'> {}
export default function ArticleLink({ className }: Props) {
  return (
    <a
      href="#"
      className={cx(
        className,
        css({
          d: 'grid',
          bo: '1px solid {colors.main}',
          radius: '4px',
          boxShadow: '{shadows.card}',
          overflow: 'hidden',
        }),
      )}>
      <BgImageLikeBox
        as="span"
        alt="記事のリンク"
        src={eventImg}
        boxClassName={cx(
          className,
          css({
            aspectRatio: '16/9',
            d: 'block',
            pos: 'relative',
          }),
        )}>
        <ArticleLabel
          isThin
          className={css({
            radius: '0 0 0 4px',
            pos: 'absolute',
            top: '0',
            right: '0',
            zIndex: '1',
          })}>
          イベント
        </ArticleLabel>
      </BgImageLikeBox>
      <ArticleLabel>料理教室開催のおしらせ</ArticleLabel>
    </a>
  );
}
