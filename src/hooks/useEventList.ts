import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());
export const eventListApiUrl = `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/custom/v1/events`;

export default function useEventList() {
  return useSWR(eventListApiUrl, fetcher);
}
