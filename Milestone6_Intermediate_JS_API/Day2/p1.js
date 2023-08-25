// task 1
const ConvertArrays = (array) => {
  let forOF = [];

  for (number of array) {
    forOF.push(number + 1);
  }

  console.log(forOF);

  const newMapArray = array.map((number) => number + 1);
  console.log(newMapArray);
};

const array = [1, 3, 5, 7, 9];

ConvertArrays(array);

// task 2
const task_two = (array) => {
  const newArray = array.filter((number) => number % 10 === 0);
  console.log(newArray);

  const arrayFind = array.find((number) => number % 10 === 0);
  console.log(arrayFind);
};

const array1 = [33, 50, 79, 78, 90, 101, 30];
task_two(array1);
