
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBR5qBltfGsKa50Jsd8hS8d8IB-9MiyRCo",
  authDomain: "netflix-clone-sahad.firebaseapp.com",
  projectId: "netflix-clone-sahad",
  storageBucket: "netflix-clone-sahad.firebasestorage.app",
  messagingSenderId: "17667175090",
  appId: "1:17667175090:web:cf96f96c6e4ddc2c694fab",
  measurementId: "G-CNX2E9X94J"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name ,email , password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email,password);
        const user =res.user;
        await addDoc(collection(db , "user"),{
            uid:user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try {
        signInWithEmailAndPassword(auth, email , password)
    } catch (error) {
        console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}

const logout = ()=>{
    signOut(auth)
}

export {auth, db, login, signup, logout}