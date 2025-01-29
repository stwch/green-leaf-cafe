interface Props extends React.ComponentPropsWithoutRef<'svg'> {}
export default function UpdateSVG({ className }: Props) {
  return (
    <svg
      role="img"
      aria-label="更新のアイコン"
      viewBox="0 0 80 80"
      fill="currentcolor"
      className={className}>
      <path d="M36 22.8c-8 1.6-14 8.8-14 17.2 0 6 2.8 10.8 7.2 14l-8 6.8C15.6 56 12 48.4 12 40c0-14 10.4-25.6 24-27.6V4l16 14-16 14v-9.2ZM28 62l16-14v9.2c8-2 14-8.8 14-17.2 0-6-2.8-10.8-7.2-14l7.6-6.8C64.4 24 68 31.6 68 40c0 14-10.4 25.6-24 27.6V76L28 62Z" />
    </svg>
  );
}
