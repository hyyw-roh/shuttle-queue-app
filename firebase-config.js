//<script src="firebase-config.js"></script>
const firebaseConfig = {
    apiKey: "AIzaSyAx9bKPTftvBeLy4Mqq9KFA1TCu_-JEc4I",
    authDomain: "shuttle-queue-app.firebaseapp.com",
    databaseURL: "https://shuttle-queue-app-default-rtdb.firebaseio.com",
    projectId: "shuttle-queue-app",
    storageBucket: "shuttle-queue-app.firebasestorage.app",
    messagingSenderId: "985734115036",
    appId: "1:985734115036:web:7bc26985dd12dd6f7a0e19"
  };


  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

//</script>