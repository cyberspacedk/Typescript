// Interfaces

/* 
  объект который содержит свойтсва и методы. 
  сущность которая реализует интерфейс должна реализвать все его обязательные свойтсва и методы
  readonly - указываем перед свойством. только для чтения
  ? - после свойства. необязательный параметр
 */

interface Rect {
  readonly id: string
  color?: string
  size:{
    width: number
    height: number
  }
} 

const rect2: Rect ={
  id: '454',
  size:{
    width: 5,
    height:5
  } 
}
 
rect2.color = '#ccc'

// =============================================
// Привести пустой объект к интерфейсу.  

// 2 способа
const rect3 = {} as Rect;
const rect4 = <Rect> {}

// =============================================
// Наследование интерфейсов  

/* 
  классическое наследование JS
  создадим интефейс ReactWithArea который наследуется от Rect
  с методом подсчета площади
*/
interface ReactWithArea extends Rect {
  getArea: ()=> number
}

// тут мы должны реализовать все свойства ReactWithArea
const react5: ReactWithArea = {
  id: '8evXsf',
  size:{
    width: 20,
    height: 20
  },
  getArea():number{
    return this.size.width*this.size.height
  }
}

// =============================================
// Для классов.  

// создаем нтерфейс

interface IClock {
  time: Date
  setTime(date:Date):void
}
// implements - указывает что класс реализует свойства интерфейса

class Clock implements IClock{
  time = new Date()
  setTime(date:Date):void{
   this.time = date
  }
}

// =============================================
// Для объекта с динамическими свойствами 

interface Styles{
 [key: string]:string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '15px',
  borderRadius: '5px'
} 