//here im gonna create a button that will authenticate the user and see if he is logged in 
//or not  
import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login' 
import { FacebookProvider, LoginButton } from 'react-facebook'
export default class facebook extends Component{
    
    handleResponse = (data) => {
        console.log(data);
      }
     
      handleError = (error) => {
        this.setState({ error });
      }
    render(){
        
        return(
        <FacebookProvider appId="324530941658027">
        <LoginButton
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
    );
    }
}
