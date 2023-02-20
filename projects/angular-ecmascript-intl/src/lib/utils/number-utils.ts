export const getNumericValue = (value: string | number) => {
  if (typeof value === 'string') {
    if (isNaN(Number(value) - parseFloat(value))) {
      throw new Error(`${value} is not a number!`);
    }

    return Number(value);
  }

  return value;
}
