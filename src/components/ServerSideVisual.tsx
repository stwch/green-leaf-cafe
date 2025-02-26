import CoverImg from '@components/CoverImg';
import CoverImgBox from '@components/CoverImgBox';
import { css } from '@styled-system/css';
import type { ComponentProps } from 'react';

type Props = { isMain?: boolean } & React.ComponentPropsWithoutRef<'div'> & ComponentProps<typeof CoverImg>;
export default function ServerSideVisual({ className, src, alt, objectPosClassName, isMain }: Props) {
  return (
    <CoverImgBox
      boxSizeClassName={css({ h: isMain ? '100vh' : '85vh' })}
      className={className}>
      <CoverImg
        priority
        alt={alt}
        src={src}
        objectPosClassName={objectPosClassName}
      />
    </CoverImgBox>
  );
}
