// Expected Result : 4200
// Direction :
// Find and returns the largest value

const item = [
  {
    name: "spoon",
    details: {
      value: 4120,
    },
  },
  {
    name: "fork",
    details: {
      value: 4200,
    },
  },
  {
    name: "plate",
    details: {
      value: 2032,
    },
  },
];

function result(item) {
  // Your Code Here
  const sorted = item.sort((a, b) => {
    return b.details.value - a.details.value;
  });
  return sorted[0].details.value;
}

console.log(result(item));
