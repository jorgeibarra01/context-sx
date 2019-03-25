import React from 'react';
import Firebase from '../utils/Firebase';
import Redirect from '../pages/AuthPageRedirect/redirect'
export const FirebaseContext = React.createContext(null);

export class FirebaseProvider extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           user: null,
           token: '', 
           isLoggedIn: false,
       }
       this.firebase = new Firebase();
   }

   async componentDidMount() {
       await this.firebase._initFirebase();
       this.onAuthListener = await this.firebase._onAuthUserListener(async (userInfo) => {
           console.log('ON AUTH FIRENBASE', userInfo);
           if(userInfo) {
                const user = {
                    email: userInfo.email,
                    uid: userInfo.uid, 
                }
                this.setState({user: user, isLoggedIn: true });
            }else{ 
                console.log('found no user')
                this.setState({isLoggedIn: false });
            }
       });

       //https://firebase.google.com/docs/reference/js/firebase.User
       this.onAuthTokenListener = await this.firebase._onAuthToken( async (token)=> {
           if(token) {
               let isToken = await token.getIdToken();
               console.log('IS THIS THE TOKEN', isToken);
               this.setState({token: isToken});
           }
       });
   }

   componentWillUnmount() {
       if(this.onAuthListener) {
           this.onAuthListener();
       }
       if(this.onAuthTokenListener) {
           this.onAuthTokenListener();
       }
   }
   
   setLoggedIn = () => { 
        this.setState({isLoggedIn: true})
    }
   render() {
    
       return (
           <FirebaseContext.Provider value={{
               user: this.state.user,
               signOut: this.firebase._signOut,
               signInEmailAndPassword: this.firebase._signInFirebaseEmailAndPassword,
               token: this.state.token,
               isLoggedIn: this.state.isLoggedIn,
               setLoggedIn: this.setLoggedIn
           }}>
               {this.props.children}
           </FirebaseContext.Provider>
       )
   }
}

export const FirebaseConsumer = Component => props => (
   <FirebaseContext.Consumer>
       {firebase => <Component {...props} firebase={firebase} />}
   </FirebaseContext.Consumer>
);

export const AuthPageRedirect = Component => props => (  // passing firebase 
    <FirebaseContext.Consumer> 
       {firebase => firebase.isLoggedIn ? <Component {...props} firebase={firebase} /> : <Redirect {...props} />}
    </FirebaseContext.Consumer>
)

export const AuthPageRedirectNoFirebase = Component => props => (  // No need to pass firebase to this component 
    <FirebaseContext.Consumer> 
       {firebase => firebase.isLoggedIn ? <Component {...props} /> : <Redirect {...props} />}
    </FirebaseContext.Consumer>
)
// export const FirebaseConsumer = props => { 
//     const firebase = useContext(FirebaseContext); 
//     console.log('firebase context', firebase)
//     return (
//         <FirebaseContext.Consumer> 
//             {props.children(firebase)}
//         </FirebaseContext.Consumer>
//     )
// }