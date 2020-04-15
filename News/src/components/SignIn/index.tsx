import * as React from "react";
import { withRouter } from "react-router-dom";

import SignInForm from "./SignInForm";
import PasswordForget from "../PasswordForget";
import { SignUpLink } from "../SignUp";

const SignInComponent = ({ history }: { [key: string]: any }) => (
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
    <PasswordForget />
  </div>
);

export default withRouter(SignInComponent);

