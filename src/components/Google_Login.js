import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


export default class Google_Login extends Component {
  render() {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
      <div>
          {/* <h1>LOGIN WITH YOUTUBE</h1> */}
        <GoogleLogin
        clientId="894373274248-kl1gnvuaa3qtoihvhfg33so1aj1sks37.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="Login with youtube"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      </div>
    )
  }
}
