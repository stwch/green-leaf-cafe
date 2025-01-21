export interface SvgIconProps extends React.ComponentPropsWithoutRef<'svg'> {}
export default function NextArrowSVG({ className }: SvgIconProps) {
  return (
    <svg
      role="img"
      aria-label="ページ移動を表す矢印"
      viewBox="0 0 80 80"
      fill="currentcolor"
      className={className}>
      <path d="M31.033 22.367a3.32 3.32 0 0 0 0 4.7L43.967 40 31.033 52.933a3.323 3.323 0 1 0 4.7 4.7l15.3-15.3a3.32 3.32 0 0 0 0-4.7l-15.3-15.3c-1.266-1.266-3.4-1.266-4.7.034Z" />
    </svg>
  );
}
