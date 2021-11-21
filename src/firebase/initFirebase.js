import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCIPDrakgxP3I8h3xpze4KaQRjbGZivApE",
    authDomain: "health-care-a22c4.firebaseapp.com",
    projectId: "health-care-a22c4",
    storageBucket: "health-care-a22c4.appspot.com",
    messagingSenderId: "341492390416",
    appId: "1:341492390416:web:523b1e8b01997cc5054895",
    measurementId: "G-TM64T7CG6Q"
  };



const fireBaseInit =() => {
    initializeApp(firebaseConfig);
}


export default fireBaseInit