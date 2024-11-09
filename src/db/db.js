import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJzGDRmWZdlOZY6VPnGjIBMWT-ra5Z334",
  authDomain: "pc-store-ecommerce.firebaseapp.com",
  projectId: "pc-store-ecommerce",
  storageBucket: "pc-store-ecommerce.appspot.com",
  messagingSenderId: "748854192295",
  appId: "1:748854192295:web:c8be4df9930fc679409382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db;