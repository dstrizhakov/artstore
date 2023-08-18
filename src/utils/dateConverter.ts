export const dateConverter = (date: string): string => {
  const dateToConvert = new Date(date);
  return dateToConvert.toLocaleString().replace(',', '');
};
