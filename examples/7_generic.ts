// Generic

const arrayOfNumbers: Array<number> = [1,1,5,5];

function reverse<T>(array:T[]):T[]{
  return array.reverse()
}