import * as React from "react";

import { auth } from "../../firebase";

import "./style.css";


const doSignOut = () => {
  localStorage.setItem('authUser', '');
  auth.logoutUser()
}

const SignOutButton = () => (
  <button type="button" onClick={doSignOut} className="navigationButton">
    Sign Out
  </button>  
);

export default SignOutButton;