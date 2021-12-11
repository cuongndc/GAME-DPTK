// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { COLLECTIONS } from "./constants/collections";
import 'firebase/auth'

import { ref, onUnmounted, computed } from 'vue';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4K-fzyA9hTSPDLVX7CS3YkZGcpHz3E6g",
    authDomain: "app-chat-firebase-ed9e8.firebaseapp.com",
    databaseURL: "https://app-chat-firebase-ed9e8-default-rtdb.firebaseio.com",
    projectId: "app-chat-firebase-ed9e8",
    storageBucket: "app-chat-firebase-ed9e8.appspot.com",
    messagingSenderId: "480312369607",
    appId: "1:480312369607:web:0d39358cb0354f8096b9e2",
    measurementId: "${config.measurementId}"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const db = getFirestore();


const auth = getAuth();

export function useAuth() {
    const user = ref(null)
    const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
    onUnmounted(unsubscribe)
    const isLogin = computed(() => user.value !== null)

    const signIn = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                user.value = result.user;
                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const signOut = () => auth.signOut()
    return { user, isLogin, signIn, signOut }
}

export function usePlayerFirebase() {
    const getPlayerByID = async (ID) => {
        const citiesRef = collection(db, COLLECTIONS.PLAYERS);
        const q = query(citiesRef, where("id", "==", ID));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs[0].data()
    }

    return { getPlayerByID }
}

export function useFirebase() {
    const firebaseStore = () => {
        return db
    }
    
    const addDocF = async (colName, payload) => {
        try {
            const docRef = await addDoc(collection(db, colName), payload);
            return docRef.id
        } catch (e) {
            throw e
        }
    }

    const getDocsF = async (colName) => {
        const querySnapshot = await getDocs(collection(db, colName));
        const result = []
        querySnapshot.forEach((doc) => {
            result.push(doc.data());
        });

        return result;
    }
    
    return { addDocF, getDocsF, firebaseStore }
}