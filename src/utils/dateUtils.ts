import { intervalToDuration } from "date-fns";

export const formatTimeLeft = (endsAt: string) => {
  const endDate = new Date(endsAt);
  const now = new Date();

  if (endDate.getTime() <= now.getTime()) return "";

  const duration = intervalToDuration({ start: now, end: endDate });

  const days = duration.days ?? 0;
  const hours = duration.hours ?? 0;
  const minutes = duration.minutes ?? 0;
  const seconds = duration.seconds ?? 0;

  if (days > 0) {
    return `${days}일 ${hours}시간 ${minutes}분`;
  }

  return `${hours}시간 ${minutes}분 ${seconds}초`;
};
