export function genereteArrayOfRandomPosiions(number = 1, multiplier = 1) {
  const array = [];
  for (let index = 0; index < number; index++) {
    array.push({
      moveDown: Math.round(Math.random() * 1000 * multiplier),
    });
  }
  return array;
}
