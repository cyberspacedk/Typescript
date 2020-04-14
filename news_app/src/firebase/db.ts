import {db} from './firebase';

// User API
export const dbCreateUser= (id:string, username:string, email:string)=>{
  const user = {
    email,
    username
  }
  db.ref(`users/${id}`).set(user)
};

export const dbGetUsersOnce = ()=> db.ref('users').once("value")  