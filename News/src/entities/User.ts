import * as Firebase from 'firebase'


export interface IUser {
  id: string;
  email: string;
  name:string;
}

export interface IUserHash{
  [key:string]: IUser
}

export default class User implements IUser{
  public id: string;
  public email: string;
  public name:string;

  constructor(user:Firebase.User){
    this.id = user.uid;
    this.email = user.email || '';
    this.name = user.displayName || '';
  }
}