import App from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';



const config = {
    apiKey: "AIzaSyDOdWowBrshvF2X2-RcgPi9iIdkK5PEEdg",
    authDomain: "soup-delivery-34dda.firebaseapp.com",
    databaseURL: "https://soup-delivery-34dda.firebaseio.com",
    projectId: "soup-delivery-34dda",
    storageBucket: "soup-delivery-34dda.appspot.com",
    messagingSenderId: "930643025151",
    appId: "1:930643025151:web:956b9d1d6b454bdba940ca",
    measurementId: "G-YKWGQL3983"
  };
 

  class Firebase {
      constructor() {
          App.initializeApp(config)
          this.auth = App.auth()
          this.db = App.firestore()
      }

      login(email, password) {
            return this.auth.signInWithEmailAndPassword(email, password)
      }
      
      logout() {
      return this.auth.signOut()
      }

      async register(email, password, firstName, lastName) {
          await this.auth.createUserWithEmailAndPassword(email, password)
          return this.auth.currentUser.updateProfile({
              displayName: firstName 
          });
      }


      getUser() {
          return this.auth.currentUser();
      }

      authChange(user) {
          return this.auth.onAuthStateChanged(user);
      }
}

  export default new Firebase()