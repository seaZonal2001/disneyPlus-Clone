import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDZAR_tSEfpjCCL3TmMVIKMEi288gnmIJo",
    authDomain: "disneyplus-clone-933fa.firebaseapp.com",
    projectId: "disneyplus-clone-933fa",
    storageBucket: "disneyplus-clone-933fa.appspot.com",
    messagingSenderId: "1027541175003",
    appId: "1:1027541175003:web:f60d86150fd0bab08b5afe"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getDatabase(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

  export {auth,provider,storage};

  export default db;