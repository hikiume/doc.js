import { initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth } from "firebase/auth"
import { getDatabase, connectDatabaseEmulator } from "firebase/database"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { getStorage, connectStorageEmulator } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA1wON-r4mq9zuxXQ38WGRYmj9HxqObPik",
  authDomain: "doc-js-app.firebaseapp.com",
  databaseURL:
    "https://doc-js-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "doc-js-app",
  storageBucket: "doc-js-app.appspot.com",
  messagingSenderId: "170925099022",
  appId: "1:170925099022:web:ecb947cdc90bf81d87545f",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
export const store = getFirestore(app)
export const storage = getStorage(app)

/**
 * !! ------- Initialize Emulators ------- !!
 */
if (window.location.hostname === "localhost") {
  connectDatabaseEmulator(db, "localhost", 9000)
  connectAuthEmulator(auth, "http://localhost:9099")
  connectFirestoreEmulator(store, "localhost", 8080)
  connectStorageEmulator(storage, "localhost", 9199)
}
