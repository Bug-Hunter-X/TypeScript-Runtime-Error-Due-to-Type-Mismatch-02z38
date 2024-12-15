function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, '6'];

const combined: number[] = combine(arr1, arr2); 
console.log(combined); //This will throw an error at runtime because '6' is a string not a number