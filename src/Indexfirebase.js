import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5vOIQ8L-xfAyWyz2q5C3vk9WIO_Ky4Xo",
  authDomain: "alphabeat-d74bf.firebaseapp.com",
  projectId: "alphabeat-d74bf",
  storageBucket: "alphabeat-d74bf.appspot.com",
  messagingSenderId: "524460770369",
  appId: "1:524460770369:web:9b10fecc198be9f290f2c0",
  measurementId: "G-H1TW877RMJ",
};
initializeApp(firebaseConfig);

const database = getFirestore();
export { database };

// getDocs(collectionRef)
//   .then((snapshot) => {
//     let beats = [];
//     snapshot.docs.forEach((doc) => {
//       beats.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(beats);
//   })
//   .catch((err) => {
//     console.log("Errore:" + err.message);
//   });
