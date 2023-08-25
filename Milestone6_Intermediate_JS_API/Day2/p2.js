const CheckingFunction = (objectParameter) => {
  const seniorMembers = objectParameter.filter(
    (person) => person.position === "Senior"
  );
  return seniorMembers;
};

const intructor = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akil", age: 26, position: "Junior" },
  {
    name: "Shobuj",
    age: 30,
    position: "Senior",
  },
];

console.log(CheckingFunction(intructor));
