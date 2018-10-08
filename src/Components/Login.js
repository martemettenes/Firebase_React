import React from 'react';
import './css/Login.css';

function Login(props){
    return (
    <div className="login">
        <form>
            <input name="username" placeholder="Username"></input>
            <input name="password" placeholder="Password"></input>
            <button className="signup-btn"> Sign up </button>
            <button className="login-btn"> Log in </button>
        </form>
    </div>
        );
    }

export default Login;