const firebaseConfig = {
    apiKey: "AIzaSyD0B0tLm8a45d8fvOkG-WyPAKIGOTpPbnA",
    authDomain: "social-website-4684b.firebaseapp.com",
    projectId: "social-website-4684b",
    storageBucket: "social-website-4684b.appspot.com",
    messagingSenderId: "28888382654",
    appId: "1:28888382654:web:090c9d0796928b8e5a32ef",
    measurementId: "G-2LHJ7HBVXG"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
