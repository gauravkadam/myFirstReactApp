import React from 'react';
import './login.css';

export default class Login extends React.Component {

    render(){
        return (
            <div>
                <form>
                    <h1>Sign In</h1>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        )
    }
}