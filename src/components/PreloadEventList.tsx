'use client';

import { eventListApiUrl } from '@hooks/useEventList';
import { useEffect } from 'react';
import { preload } from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function PreloadEventList() {
  useEffect(() => {
    preload(eventListApiUrl, fetcher);
  }, []);

  return false;
}
