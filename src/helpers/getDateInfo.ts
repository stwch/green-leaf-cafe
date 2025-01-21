import { readFileSync } from 'node:fs';

const holidays = _loadHolidays();

export default function getDateInfo(isoDateString: string) {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  const date = new Date(isoDateString);

  if (isNaN(date.getTime())) {
    throw new Error(`${isoDateString}は無効な日付です。正しい日付を入力してください。`);
  }
  const dayIndex = date.getDay();
  const dayName = days[dayIndex];
  const isHoliday = Boolean(holidays[isoDateString]);
  const isSunDay = dayName === '日';
  const isSaturDay = dayName === '土';
  const isNormalDay = !(isHoliday || isSunDay || isSaturDay);
  const month = isoDateString.split('-')[1];
  const dayNumber = isoDateString.split('-')[2].replace(/^0/, '');
  return {
    month: Number(month).toString(),
    day: {
      name: dayName,
      number: dayNumber,
    },
    dayNumber,
    isNormalDay,
    isSunDay,
    isSaturDay,
    isHoliday,
  };
}

function _loadHolidays(): Record<string, string> {
  const data = readFileSync('./src/data/holidays2025-2026.json', 'utf8');
  return JSON.parse(data);
}
