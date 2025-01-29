import PublicSVG from '@components/svg/PublicSVG';
import UpdateSVG from '@components/svg/UpdateSVG';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

type DateMode = 'public' | 'update';
interface Props extends React.ComponentPropsWithoutRef<'p'> {
  mode: DateMode;
  isoDateString: string; //例：2025-01-29
}
export default function ArticleDate({ mode, isoDateString }: Props) {
  const values = _createValues(mode);
  const dateLabel = isoDateString.replace(/-/g, '/');

  return (
    <p
      className={cx(
        fontCVA({ label: 'articleDate' }),
        css({
          d: 'flex',
          color: '#333',
        }),
      )}>
      <values.Icon className={css({ w: '1rem' })} />
      {values.label}：&nbsp;<time dateTime={isoDateString}>{dateLabel}</time>
    </p>
  );
}

function _createValues(mode: DateMode) {
  switch (mode) {
    case 'public': {
      return {
        label: '公開日',
        Icon: PublicSVG,
      };
    }
    case 'update': {
      return {
        label: '更新日',
        Icon: UpdateSVG,
      };
    }
    default:
      throw new Error(`mode を指定してください`);
  }
}
