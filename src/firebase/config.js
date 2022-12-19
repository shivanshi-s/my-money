import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyDtOQvSNJEoJibL3_19FRoNwg6RdWh4nwA",
   authDomain: "mymoney-d12f5.firebaseapp.com",
   projectId: "mymoney-d12f5",
   storageBucket: "mymoney-d12f5.appspot.com",
   messagingSenderId: "673855638526",
   appId: "1:673855638526:web:ffc8e9a513c4232a3e4eaf"
};
// init firebase
firebase.initializeApp(firebaseConfig);
// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
// export the service for use
export { projectFirestore, projectAuth }
