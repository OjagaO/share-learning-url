import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDelE6YPKEQ1nVP0liNSMzIGNAYaztMOYk",
  authDomain: "react-blog-4e78f.firebaseapp.com",
  projectId: "react-blog-4e78f",
  storageBucket: "react-blog-4e78f.appspot.com",
  messagingSenderId: "1076435976220",
  appId: "1:1076435976220:web:895fb1e730a870b48a1fd9"
};

// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_API_KEY,
//   authDomain:process.env.REACT_APP_API_DOMAIN,
//   projectId:process.env.REACT_APP_API_PROJECT_ID,
//   storageBucket:process.env.REACT_APP_API_STORAGE,
//   messagingSenderId:process.env.REACT_APP_API_SENDER_ID,
//   appId:process.env.REACT_APP_API_APP_ID,
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth , provider , db }