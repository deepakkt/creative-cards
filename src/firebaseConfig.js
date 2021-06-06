import Firebase from 'firebase'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "api-key-goes-here",
    authDomain: "cards-app-subdomain.firebaseapp.com",
    databaseURL: "https://cards-app-database.firebaseio.com",
    projectId: "cards-app-project-id",
    storageBucket: "cards-app-storage-bucket.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id"
  };
  // Initialize Firebase
  Firebase.initializeApp(firebaseConfig);
