import React from 'react';

export default class Account extends React.Component{

  public render(){
    return(
      <div>
        Account: {localStorage.getItem('authUser')}
      </div>
    )
  }
}