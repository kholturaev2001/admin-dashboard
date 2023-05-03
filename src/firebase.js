import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWeRbIizO5o14EK9qnyC6EczGMq34A_z4",
  authDomain: "admin-dashboard-de13e.firebaseapp.com",
  projectId: "admin-dashboard-de13e",
  storageBucket: "admin-dashboard-de13e.appspot.com",
  messagingSenderId: "254216101577",
  appId: "1:254216101577:web:2272978f8028c352a2f718"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage (app)

