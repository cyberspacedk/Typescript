// Boolean __________________
const isFetching: boolean = true;
const isLoading:boolean = false;

// Number __________________
const int: number = 42; 
const float: number = 4.2;

// String __________________
const message: string = 'Hi there';

// Array __________________
const numberArray: number[] = [1,2,3,4];
const numberArray2: Array<number> = [5,88,99]
const stringsArray: Array<string> = ['woman', 'animal'];

// Tuple __________________
// для елементов массива с разными типами значений
const contact: [string, number] = ['Sam', 123345];

// Any
let variable:any = 55;
variable = '55';

// Function __________________
// void - значит что ф-ция ничего не возвращает
function sayMyName(name:string):void{
  console.log(name)
}

sayMyName('Sam');

// Never
function throwError(message:string):never{ 
     throw new Error(message) 
} 
function infinite():never{
  while(true){ 
  }
}

// Type __________________
// Конструкция которая создает свои типы и алиасы
// Используется для придания типам смысла

type Login = string;
const login: Login = 'admin'
 
// например обычно Id может быть как строкой так и числом
// создадим для этого кастомный тип ID и обозначим для него типы
type ID = string | number

const postId: ID = 1215 


// Null undefined
type SomeType = string | null | undefined