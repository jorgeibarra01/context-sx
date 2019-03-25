import React, { Component, useContext } from 'react';
import {Layout} from './pages/Login/Layout'
import { Link } from "react-router-dom";
// import {FirebaseConsumer} from '../src/context/fbContext'
// import {FBContext} from '../src/context/fbContext'

export default props => { 
    // const {setMessage, isLoading, setIsLoading} = useContext(FBContext);
    console.log('props', props); 
    return (
      <div>
        <Layout/> 
        <Link to={'/test'}> <button onClick={() => {}}> Link To Test Page </button></Link> 
        {/* <button onClick ={() => setIsLoading(!isLoading)}> Is Loading </button> */}
      </div>
    );
}

