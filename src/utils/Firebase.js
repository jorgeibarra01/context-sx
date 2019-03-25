// const { firebaseConfig } = require('./firebaseconfig')
const firebaseConfig = {
    apiKey: "AIzaSyAhvBTFZJmXhkKgTT0fQoswI-hw2zC8tM0",
    authDomain: "sandbox-39e00.firebaseapp.com",
    databaseURL: "https://sandbox-39e00.firebaseio.com",
    projectId: "sandbox-39e00",
    storageBucket: "sandbox-39e00.appspot.com",
    messagingSenderId: "283581058693"
  }
class Firebase {
   constructor() {
       this.app = null;
       this.auth = null;
    //    this.googleProvider = null;
    //    this.facebookProvider = null;
   }

   _initFirebase = async () => {
           const _fbApp = await import('firebase/app');
           await import('firebase/auth');

           if(!_fbApp.apps.length) {
               _fbApp.initializeApp(firebaseConfig);
           }

           this.app = _fbApp;
           this.auth = _fbApp.auth();
        //    this.googleProvider = new _fbApp.auth.GoogleAuthProvider();
        //    this.facebookProvider = new _fbApp.auth.FacebookAuthProvider();
   }

   _onAuthUserListener = async (cb) =>
       this.auth.onAuthStateChanged((authUser) =>{
           cb(authUser);
       });

   _onAuthToken = async (cb) =>
       this.auth.onIdTokenChanged((token) => {
           cb(token);
       })

   _signInFirebaseEmailAndPassword = async ({email,password}) =>
       await this.auth.signInWithEmailAndPassword(email,password)

   _signOut = async () => await this.auth.signOut();

//    /*Auth Providers* /
//    _signInFacebook = async () => await this.auth.signInWithPopup(this.facebookProvider);

//    _signInGoogle = async () => await this.auth.signInWithPopup(this.googleProvider);

}

export default Firebase;