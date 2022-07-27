import React from 'react';
import Registration from './Registration';
import Login from './Login';

const SignIn = () => {
    return (
        <div>
            <h1>Sign in Below</h1>
            <div className='row'>
                <div className='col'>
                    <Registration></Registration>
                </div>
                <div className='col'>
                    <Login></Login>
                </div>
            </div>
        </div>
    );
};

export default SignIn;