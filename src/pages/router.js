import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App'
import SamplePage from '../pages/SamplePage/SamplePage'
import {FirebaseProvider, AuthPageRedirect, FirebaseConsumer} from '../context/fbContext' // AuthPageRedirectNoFirebase
import Login from '../pages/Login/Login'


export default () => {
    
  return (
    <Router>
      <FirebaseProvider>
        <Route exact path="/" component={App} />
        <Route path="/login" component={FirebaseConsumer(Login)} />
        <Route path="/test" component={AuthPageRedirect(SamplePage)} />
        {/* <Route path="/settings" component={SamplePage} /> */}
      </FirebaseProvider>
    </Router>
  );
}
