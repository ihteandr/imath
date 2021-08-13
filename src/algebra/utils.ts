let dimension = 5;

export function changeDimension(newDimension: number) {
  dimension = newDimension;
}

export function fixNumber (number: number) {
  if (number === -0) return 0;
  return parseFloat(number.toFixed(dimension));
}