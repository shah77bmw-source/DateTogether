import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig={

apiKey:"AIzaSyALG4eEBwFpVPy5JK0hmodRa7yHE4aqPls",

authDomain:"datetogether-ec8c8.firebaseapp.com",

projectId:"datetogether-ec8c8",

storageBucket:"datetogether-ec8c8.firebasestorage.app",

messagingSenderId:"549760834317",

appId:"1:549760834317:web:104e31e73a16b13e892e44"

};

const app=initializeApp(firebaseConfig);

const db=getFirestore(app);

window.saveAnswer=async(data)=>{

await addDoc(collection(db,"answers"),{

...data,

createdAt:serverTimestamp()

});

};