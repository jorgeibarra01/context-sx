import React, { useContext } from 'react';
import Firebase from '../utils/Firebase';

export const FirebaseContext = React.createContext(null);

export class FirebaseProvider extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           user: null,
           token: ''
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
               uid: userInfo.uid
           }
           this.setState({user: user});
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

   render() {
       return (
           <FirebaseContext.Provider value={{
               user: this.state.user,
               signOut: this.firebase._signOut,
               signInEmailAndPassword: this.firebase._signInFirebaseEmailAndPassword,
               token: this.state.token
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

// export const FirebaseConsumer = props => { 
//     const firebase = useContext(FirebaseContext); 
//     console.log('firebase context', firebase)
//     return (
//         <FirebaseContext.Consumer> 
//             {props.children(firebase)}
//         </FirebaseContext.Consumer>
//     )
// }