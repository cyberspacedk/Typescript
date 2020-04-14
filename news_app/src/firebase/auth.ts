import {auth} from './firebase';

// Sign Up
export const createUser = (email:string, password:string)=>{
  auth.createUserWithEmailAndPassword(email, password)
};

// Sign In
export const loginUser = (email:string, password:string)=>{
  auth.signInWithEmailAndPassword(email, password);
}

// Sign Out
export const logoutUser = ()=>{
  auth.signOut();
}

// Password reset
export const forgotPassword = (email:string)=>{
  auth.sendPasswordResetEmail(email);
}

// Password Change
export const passwordUpdate = async (password:string)=>{
  if(auth.currentUser){
    await auth.currentUser.updatePassword(password);
  }
  throw Error("No auth current user!")
}
