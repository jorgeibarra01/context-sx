import React from 'react';
import {UserLogin} from './UserLoginContext' 
import Login from './Login'

export const Layout = (props) => {
    console.log('layout props', props)
    return (
        <UserLogin>
            <Login /> 
        </UserLogin>
    )
}