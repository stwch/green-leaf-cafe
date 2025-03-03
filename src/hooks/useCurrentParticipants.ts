import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/reservation/v1/count`;

export default function useCurrentParticipants(eid: string | number) {
  return useSWR(`${apiUrl}/${eid}`, fetcher);
}
