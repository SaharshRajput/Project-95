//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAbxgHLFr9TVBeH-mTCCgsr8DbFg00VC8w",
    authDomain: "kwitter-72a94.firebaseapp.com",
    databaseURL: "https://kwitter-72a94-default-rtdb.firebaseio.com",
    projectId: "kwitter-72a94",
    storageBucket: "kwitter-72a94.appspot.com",
    messagingSenderId: "992873144043",
    appId: "1:992873144043:web:c59e5f4326d6dfe4fd28ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  user_name=document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
  function  addRoom()
  {
   room_name=document.getElementById("room_name").value;
   firebase.database().ref(/).child(room_name).update({
       purpose :"adding room name"
   })   ;
   localStorage.setItem("room_name",room_name);
   window.location="lets_chat.html";
   function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" name );
    window.location="lets_chat.html";
}