export interface SvgIconProps extends React.ComponentPropsWithoutRef<'svg'> {}
export default function LeafSVG({ className }: SvgIconProps) {
  return (
    <svg
      role="img"
      aria-label="木の葉"
      viewBox="0 0 80 80"
      fill="currentcolor"
      className={className}>
      <path d="M56.667 26.667c-30 6.666-37 27.233-43.934 44.466l6.3 2.2 3.167-7.666c1.6.566 3.267 1 4.467 1C63.333 66.667 73.333 10 73.333 10 70 16.667 46.667 17.5 30 20.833 13.333 24.167 6.667 38.333 6.667 45c0 6.667 5.833 12.5 5.833 12.5 10.833-30.833 44.167-30.833 44.167-30.833Z" />
    </svg>
  );
}
