'use client';

import { eventApiUrl } from '@hooks/useEvent';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { preload } from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function PreloadEvent() {
  const eid = useSearchParams().get('eid');
  useEffect(() => {
    if (eid) preload(`${eventApiUrl}/${eid}`, fetcher);
  }, [eid]);

  return false;
}
