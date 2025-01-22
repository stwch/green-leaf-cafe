interface Props extends React.ComponentPropsWithoutRef<'svg'> {}
export default function PrantSVG({ className }: Props) {
  return (
    <svg
      role="img"
      aria-label="植木鉢から生えてる双葉"
      viewBox="0 0 80 80"
      fill="currentcolor"
      className={className}>
      <path d="M69.993 10v6.667A23.334 23.334 0 0 1 46.66 40h-3.333v3.333h16.666v23.334a6.666 6.666 0 0 1-6.666 6.666H26.66a6.666 6.666 0 0 1-6.667-6.666V43.333H36.66v-10A23.334 23.334 0 0 1 59.993 10h10ZM18.327 6.667A24.966 24.966 0 0 1 38.74 17.23a26.534 26.534 0 0 0-5.413 16.103v3.334H31.66a25 25 0 0 1-25-25v-5h11.667Z" />
    </svg>
  );
}
