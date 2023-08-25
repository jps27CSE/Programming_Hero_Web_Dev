const arrayFunction = (array1, array2) => {
  const newArray = [...array1, ...array2];

  return Math.max(...newArray);
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

console.log(arrayFunction(array1, array2));
