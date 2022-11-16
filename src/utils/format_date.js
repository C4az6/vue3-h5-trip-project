import dayjs from 'dayjs'
export function formatMonthDay(date) {
  return dayjs(date).format("MM月DD日");
}

export function getDiffDays(start, end) {
  // 注意：要用旧的时间和新的时间做比较
  return dayjs(end).diff(start, 'day')
}