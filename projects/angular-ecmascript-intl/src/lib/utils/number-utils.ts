export const getNumericValue = (value: string | number): number => {
  if (typeof value === 'number') {
    return value;
  }

  if (isNaN(Number(value) - parseFloat(value))) {
    throw new Error(`${value} is not a number!`);
  }

  return Number(value);
}
