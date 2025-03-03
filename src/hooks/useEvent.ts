import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());
export const eventApiUrl = `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/custom/v1/event`;

export default function useEvent(id: string | null | undefined) {
  if (!id) return false;
  return useSWR(`${eventApiUrl}/${id}`, fetcher);
}
