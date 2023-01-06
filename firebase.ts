// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2JmLEGRV-H3aoGly4svNEPco4R9_r-x4",
  authDomain: "netflix-nextjs-ts.firebaseapp.com",
  projectId: "netflix-nextjs-ts",
  storageBucket: "netflix-nextjs-ts.appspot.com",
  messagingSenderId: "961092785295",
  appId: "1:961092785295:web:bb20796c6bac9743faccfa",
  measurementId: "G-WGS05QZ3VL"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }