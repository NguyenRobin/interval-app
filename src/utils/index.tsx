export function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const minuteFormat = minutes >= 10 ? `${minutes}` : `0${minutes}`;
  const secondFormat = seconds >= 10 ? `${seconds}` : `0${seconds}`;

  return `${minuteFormat}:${secondFormat}`;
}
