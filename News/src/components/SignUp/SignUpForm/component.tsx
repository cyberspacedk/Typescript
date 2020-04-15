import * as React from "react";

import { auth, db } from "../../../firebase";
import { HOME } from "../../../constants/routes";

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  passwordOne?: string;
  passwordTwo?: string;
  username?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  passwordOne: string;
  passwordTwo: string;
  username: string;
}

export default class SignUpForm extends React.Component<InterfaceProps, InterfaceState> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    passwordOne: "",
    passwordTwo: "",
    username: ""
  };

  constructor(props: InterfaceProps) {
    super(props);
    this.state = { ...SignUpForm.INITIAL_STATE };
  }

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  private setStateWithEvent(event: any, columnType: string) {
    this.setState(SignUpForm.propKey(columnType, (event.target as any).value));
  } 

  public onSubmit(event: any) {
    event.preventDefault();

    const { email, passwordOne, username } = this.state;
    let { history } = this.props;

    auth
      .createUser(email, passwordOne)
      .then((authUser: any) => {

        // Create a user in your own accessible Firebase Database too
        db.dbCreateUser(authUser.user.uid, username, email)
          .then(() => { 
            this.setState(() => ({ ...SignUpForm.INITIAL_STATE }));
            history ? history.push(HOME): history = this.props;
          })
          .catch(error => {
            this.setState(SignUpForm.propKey("error", error));
          });
      })
      .catch(error => {
        this.setState(SignUpForm.propKey("error", error));
      });
  }

  public render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={(event) => this.onSubmit(event)}>
        <input
          value={username}
          onChange={event => this.setStateWithEvent(event, "username")}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setStateWithEvent(event, "email")}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setStateWithEvent(event, "passwordOne")}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setStateWithEvent(event, "passwordTwo")}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }

 
}