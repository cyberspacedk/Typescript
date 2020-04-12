// Functions

/* 
  Аргументы типизируюся как переменные
  то, что должна возвращать функция пишем послe вызова функции
*/

function add(a:number, b:number):number {
  return a+b
}

function toUpperCase(str: string):string{
  return str.trim().toLowerCase()
}

interface Position{
  x: number | undefined
  y: number | undefined
}

interface PositionDefault extends Position{
  default: string
}

function position():Position
function position(a:number): PositionDefault
function position(a:number, b:number):Position

function position(a?:number, b?:number){
  if(!a && !b) return {x:undefined, y:undefined}
  if(a && !b) return {x:a, y: undefined, default: a.toString()}
  return {x:a, y:b}
}