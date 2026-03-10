function countEvens(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;

  let count = 0
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value != 'number' || !Number.isFinite(value)) return false;
    if (Number.isFinite(value) && value % 2 == 0) count++;
  }
  return count;
}

console.log(countEvens([5,3,4,'k',5,3,2]))
console.log(countEvens([5,3,4,5,3,2]))