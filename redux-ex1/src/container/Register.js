import React from 'react';

const RegisterPage = () => {

    return (
        <div className="box container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="email"><b>Name</b></label>
            <input type="text" placeholder="Enter NAme" name="name" id="name" required />
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
            <hr />
            <button type="submit" className="reg-button">Register</button>
        </div>

    );
}

export default RegisterPage;