var firebaseConfig = {
  apiKey: "AIzaSyB6nzBFPUjMPN5bE-5KJllT2sceLF_k8sA",
  authDomain: "fynite-motors.firebaseapp.com",
  projectId: "fynite-motors",
  storageBucket: "fynite-motors.appspot.com",
  messagingSenderId: "899171419070",
  appId: "1:899171419070:web:cd3a2d1eefba528f45afef",
  measurementId: "G-MVBT7E3QCZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

