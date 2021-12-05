import {initializeApp} from 'firebase/app'
import { getAuth, 
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword, 
        signOut,
        sendPasswordResetEmail,
        updatePassword,
        updateProfile
} from "firebase/auth";
import { getDatabase,
         ref, set, get,
         child, push
} from "firebase/database";

const firebaseConfig = {
    apiKey:                 process.env.REACT_APP_API_KEY,
    authDomain:             process.env.REACT_APP_AUTH_DOMAIN,
    projectId:              process.env.REACT_APP_PROJECT_ID,
    databaseURL:            process.env.REACT_APP_DATABASE_URL,
    storageBucket:          process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:      process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:                  process.env.REACT_APP_APP_ID,
    measurementId:          process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
    constructor() {
        const app = initializeApp(firebaseConfig);

        this.auth = getAuth(app);
        this.database = getDatabase(app);
    }

    doCreateUser = async (userEmail, userName, passWord) => {
        try{
            await createUserWithEmailAndPassword(this.auth, userEmail, passWord);
            await this.doLogIn(userEmail, passWord);
            
            let user = this.auth.currentUser;
            updateProfile(this.auth.currentUser, {
                displayName: userName,
            })
            
            set(ref(this.database, 'Users/'+user.uid), {
                username: userName,
                tokens: 0,
                permissions: 0
            })
            
        } catch(evt) {
            console.log(evt.message);
        }
    }

    doLogIn = async (userEmail, passWord) => {
        try {
            await signInWithEmailAndPassword(this.auth, userEmail, passWord);
        } catch(error) {
            console.log(error.message);
        }
    }

    doSignOut = async () => {
        try {
            await signOut(this.auth);
        } catch(error) {
            console.log(error.message);
        }
    }

    doPasswordReset = async email =>{
        try{
            await sendPasswordResetEmail(this.auth, email);
        } catch(error) {
            console.log(error.message)
        }
    } 

    doPasswordUpdate = password => updatePassword(this.auth, password);
}

export default Firebase;