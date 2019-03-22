import React, { useState } from 'react';
export const UserLoginContext = React.createContext();

export const UserLogin = ({props, children}) => { 
    console.log('UserLogin', props); 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [photoURL, setPhotoURL] = useState('')
    const [uid, setUID] = useState('')
    const [emailVerified, setEmailVerified] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)




    return (
        <UserLoginContext.Provider value={{
            email, setEmail, password, setPassword,
            displayName, setDisplayName,
            phoneNumber, setPhoneNumber,
            photoURL, setPhotoURL,
            uid, setUID,
            emailVerified, setEmailVerified,
            isLoggedIn, setIsLoggedIn
        }} > 
            {children}
        </UserLoginContext.Provider>
    ) 
}