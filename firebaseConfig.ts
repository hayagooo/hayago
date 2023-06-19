import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBi8dJvahsGnlEJxt2XW9CbCVCZ_F8QbIA",
  authDomain: "eco-enzym.firebaseapp.com",
  projectId: "eco-enzym",
  storageBucket: "eco-enzym.appspot.com",
  messagingSenderId: "1090135367285",
  appId: "1:1090135367285:web:024ab437397e3ea199623c"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, database, storage };