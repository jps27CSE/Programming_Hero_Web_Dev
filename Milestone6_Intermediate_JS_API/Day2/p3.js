const peopleFunction = (objectOfpeople) => {
  let totalAgeFor = 0;
  for (let i = 0; i < objectOfpeople.length; i++) {
    totalAgeFor += objectOfpeople[i].age;
  }
  console.log(totalAgeFor);

  const usingReduce = objectOfpeople.reduce((acumulator, person) => {
    return (acumulator += person.age);
  }, 0);

  console.log(usingReduce);
};

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

peopleFunction(people);
