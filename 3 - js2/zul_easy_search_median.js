// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const sorted = input.sort((a, b) => {
    return a - b;
  });
  const midIndex = Math.floor(sorted.length / 2) - 1;

  return sorted[midIndex];
}

console.log(result(input));
