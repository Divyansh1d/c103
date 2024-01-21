function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;


    Room_names = childKey;
   //Start code

   row = "<div class='room_name' id="+Room_names+" onclick='redircetToRoomName(this.id)'>#"+Room_name+"</div><hr>"
   //End code
   });});}
getData();


function redircetToRoomName(name){
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,massage:msg,like:0});
      document.getElementById("msg").value = "";
}




