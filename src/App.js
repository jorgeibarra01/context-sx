import React from 'react';
import { Link } from "react-router-dom";
import {FirebaseConsumer} from './context/fbContext'
import Login from './pages/Login/Login'

export default props => { 
    console.log('props', props); 
    return (
      <div>
        <FirebaseLogin {...props}/> 
        <Link to={'/test'}> <button onClick={() => {}}> Link To Test Page </button></Link> 
      </div>
    );
}

const FirebaseLogin = FirebaseConsumer(Login);
