interface Props extends React.ComponentPropsWithoutRef<'svg'> {}
export default function PublicSVG({ className }: Props) {
  return (
    <svg
      role="img"
      aria-label="地球のアイコン"
      viewBox="0 0 80 80"
      fill="currentcolor"
      className={className}>
      <path d="M40 6.667C21.6 6.667 6.667 21.6 6.667 40S21.6 73.333 40 73.333 73.333 58.4 73.333 40 58.4 6.667 40 6.667Zm-3.333 59.766C23.5 64.8 13.333 53.6 13.333 40c0-2.067.267-4.033.7-5.967L30 50v3.333C30 57 33 60 36.667 60v6.433Zm23-8.466c-.867-2.7-3.334-4.634-6.334-4.634H50v-10C50 41.5 48.5 40 46.667 40h-20v-6.667h6.666c1.834 0 3.334-1.5 3.334-3.333v-6.667h6.666c3.667 0 6.667-3 6.667-6.666V15.3c9.767 3.967 16.667 13.533 16.667 24.7 0 6.933-2.667 13.233-7 17.967Z" />
    </svg>
  );
}
