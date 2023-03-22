import React, { useState } from 'react';
import data from './users.json';
import './style.css';

function Login() {
    const [users, setUsers] = useState(data);
    const [errorMessage, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        email: "invalid email",
        pass: "invalid password"
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        var {email, password} = document.forms[0];
        
        const userData = users.find((user) => user.email === email.value)

        if(userData) {
            if(userData.password !== password.value){
                setErrorMessage({name:"password", message: errors.pass});
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessage({name:"email", message: errors.email});
        }
    }

    const renderErrorMessage = (name) => 
    name === errorMessage.name && (
        <div className="error">{errorMessage.message}</div>
    )

    const renderForm = (
        <div className="form">
            <form onSubmit={handelSubmit}>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" name="email" required />
                    {renderErrorMessage("email")}
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="text" name="password" required />
                    {renderErrorMessage("password")}
                </div>
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );

    return (
        <div className="login-app">
            <div className="login-form">
                <div className="title">Sign in </div>
                {isSubmitted ? <div>Log in successfully</div> : renderForm}
            </div>
        </div>
    )
}

export default Login