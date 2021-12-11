// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import {COLLECTIONS} from "./constants/collections";

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
initializeApp(firebaseConfig);
const db = getFirestore();

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