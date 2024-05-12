export const formatToTime = (value: Date): string =>
  value.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

export const formatToDate = (value: Date): string =>
  new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(value);
