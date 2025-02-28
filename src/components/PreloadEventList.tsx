'use client';

import { useEffect } from 'react';
import { preload } from 'swr';
import { eventListApiUrl } from '../hooks/useEventList';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function PreloadEventList() {
  useEffect(() => {
    preload(eventListApiUrl, fetcher);
  }, []);

  return false;
}
