import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App'
import SamplePage from '../pages/SamplePage/SamplePage'
import {FirebaseProvider} from '../context/fbContext'


export default () => {
    
  return (
    <Router>
      <FirebaseProvider>
        {/* <Header /> */}

        <Route exact path="/" component={App} />
        <Route path="/test" component={SamplePage} />
        <Route path="/settings" component={SamplePage} />
      </FirebaseProvider>
    </Router>
  );
}
