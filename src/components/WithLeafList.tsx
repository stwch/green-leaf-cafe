import LeafSVG from '@components/svg/LeafSVG';
import { css, cx } from '@styled-system/css';
import { fontCVA } from '@styles/fontCVA';

interface Props extends React.ComponentPropsWithoutRef<'ul'> {
  texts: string[];
}
export default function WithLeafList({ className, texts }: Props) {
  return (
    <ul className={className}>
      {texts.map((text, i) => {
        return (
          <li
            key={i}
            className={cx(
              fontCVA({ body: 'eventInfoItem' }),
              css({
                d: 'grid',
                gridTemplateColumns: 'auto 1fr',
                columnGap: '.125rem',
                '&+&': {
                  mt: '.5rem',
                },
              }),
            )}>
            <LeafSVG className={css({ w: '.875rem', color: '{colors.main}' })} />
            {text}
          </li>
        );
      })}
    </ul>
  );
}
