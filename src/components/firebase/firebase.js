import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey:                 process.env.REACT_APP_API_KEY,
    authDomain:             process.env.REACT_APP_AUTH_DOMAIN,
    projectId:              process.env.REACT_APP_PROJECT_ID,
    storageBucket:          process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:      process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:                  process.env.REACT_APP_APP_ID,
    measurementId:          process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
        this.db = firebase.database();
    }

    test(){
        let dbRef = this.db.ref();

        dbRef.on('value', snapshot => {
            console.log(snapshot.val());
        })
    }

    doCreateUser = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;