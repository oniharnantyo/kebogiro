import dayjs from 'dayjs';
import localeId from 'dayjs/locale/id';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const formatDate = (date: Date, format: string) =>
  dayjs(date).locale(localeId).format(format);

export const humanizeDate = (date: Date) => dayjs(date).locale(localeId).fromNow();
