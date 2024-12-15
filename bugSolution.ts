function combine(arr1: number[], arr2: number[]): number[] {
  // Check the type of each element during execution
  for (const num of arr2) {
    if (typeof num !== 'number') {
      throw new Error('Invalid input: arr2 must contain only numbers.');
    }
  }
  return arr1.concat(arr2);
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, '6']; //Still contains a string

try {
  const combined: number[] = combine(arr1, arr2); 
  console.log(combined); 
} catch (error) {
  console.error(error.message); // This will now catch the error
}
//Another solution is to use a more robust type check like this
function combine2(arr1: number[], arr2: number[]): number[]{
    const isValid = arr2.every(num => typeof num === 'number');
    if (!isValid) {
        throw new Error('arr2 must contain only numbers');
    }
    return arr1.concat(arr2);
}

try {
    const combined2 = combine2(arr1, arr2);
    console.log(combined2);
} catch (error) {
    console.error(error.message);
}