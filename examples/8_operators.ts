interface Person{
  name: string
  age:number
}

// создадим тип PersonKeys в который запишем как значения ключи интерфейса Person
type PersonKeys = keyof Person

// имеем тип type PersonKeys = 'name' | 'age'

// переменная myName может содержать только значения 'name' или 'age'

let myName: PersonKeys = 'name'
myName = 'age'

 
// Можно исключать некоторые поля
type User {
  _id: number
  name:string
  email: string
  createdAt: Date
}

// Исключить поля
// Exclude<keyof Тип, 'ключ-1' | 'ключ-2'>
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>

// Скопировать только нужные
// Pick<Тип, 'ключ-1' | 'ключ-2'> 
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>


const user1: UserKeysNoMeta = 'name'
const user2: UserKeysNoMeta2 = {
  email:'email.com',
  name:'name'
}