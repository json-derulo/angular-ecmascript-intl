export const getDateString = (date?: Date): string => {
  const newDate = date ? new Date(date) : new Date();
  return new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, -1)
    .split('.')[0];
};
