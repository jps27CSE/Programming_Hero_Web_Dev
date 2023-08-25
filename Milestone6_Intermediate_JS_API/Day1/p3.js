const array_ofNumbers = (array) => {
  let sumOfArray = 0;
  const newArray = array.map((number) => number * 2);

  newArray.forEach((number) => (sumOfArray += number));

  console.log("Square of Array Elements:", newArray);
  console.log("Sum of Array Elements:", sumOfArray);
};

const array = [2, 3, 4, 5, 6];

array_ofNumbers(array);
