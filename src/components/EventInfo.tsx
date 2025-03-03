'use client';

import WithLeafList from '@components/WithLeafList';

interface Props extends React.ComponentPropsWithoutRef<'ul'> {
  eventName: string;
  price?: string;
  capacity?: string;
  remainingCapacity?: number;
  exInfo?: string[];
}
export default function EventInfo({ className, eventName, price, capacity, remainingCapacity, exInfo = [] }: Props) {
  const priceText = price ? `参加費： 1名 ${price}円(税込)` : '参加費： 無料';
  const existsCapacity = capacity && remainingCapacity;
  const capacityText = existsCapacity ? `定員：　 ${capacity}名(あと${remainingCapacity}名)` : '定員：　 なし';
  return (
    <WithLeafList
      className={className}
      texts={[eventName, priceText, capacityText, ...exInfo]}
    />
  );
}
