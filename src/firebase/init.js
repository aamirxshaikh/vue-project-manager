import firebase from 'firebase'
// import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB1JJpxsgdAPcJM__46kC_-hWvnn1v67f4",
    authDomain: "nitro-project-manager.firebaseapp.com",
    databaseURL: "https://nitro-project-manager.firebaseio.com",
    projectId: "nitro-project-manager",
    storageBucket: "nitro-project-manager.appspot.com",
    messagingSenderId: "285482549415",
    appId: "1:285482549415:web:2c73f7befea9ee34665b82"
  };

const  firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// firebase.analytics()

// export firestore db
export default firebaseApp.firestore();
