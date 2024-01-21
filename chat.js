// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBrkwK8e1JNKJTGABaEOUhmudDymZRXO68",
    authDomain: "lets-chat-web-app-b0b0c.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-b0b0c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-b0b0c",
    storageBucket: "lets-chat-web-app-b0b0c.appspot.com",
    messagingSenderId: "522369384532",
    appId: "1:522369384532:web:abb6d4d1757f3af69cedc1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
  
}



