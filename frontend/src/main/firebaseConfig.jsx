import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfQasYnms4ZbdkG1KFm94JLqNrUesBSdk",
    authDomain: "projeto-oficina-2.firebaseapp.com",
    projectId: "projeto-oficina-2",
    storageBucket: "projeto-oficina-2.appspot.com",
    messagingSenderId: "236042839677",
    appId: "1:236042839677:web:a2fca68f1f192ec1a83314"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db