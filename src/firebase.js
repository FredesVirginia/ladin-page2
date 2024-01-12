import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getStorage , ref , uploadBytes , getDownloadURL , getBytes} from "firebase/storage";
import { getFirestore , collection , addDoc , getDoc , 
  doc , getDocs ,query , where, setDoc , deleteDoc , docId } from "firebase/firestore";


  
  const firebaseConfig = {
    apiKey: "AIzaSyDXEuRabyzzKIi1KtlZdQTSUJhpAYY2mOI",
    authDomain: "ladingfirebase.firebaseapp.com",
    projectId: "ladingfirebase",
    storageBucket: "ladingfirebase.appspot.com",
    messagingSenderId: "939931282241",
    appId: "1:939931282241:web:547cbf0834acbaa5824fc0",
    measurementId: "G-KNP5BSXVTY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export async function registerUser(user){
    console.log("EL user que llega es " , user);
    try{
        const collectionRef = collection(db , "users");
        const docRef = await addDoc(collectionRef , user);
        console.log("Lo que dijo docRef es " , docRef);
        return docRef;
    }catch(error){
        console.log("EL error fue en firebase register user" , error);
    }
}