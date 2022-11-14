var firebaseConfig = {
    apiKey: "AIzaSyCxE6dj5aC6daZFN0cXNAJyiL1H45WaAAA",
    authDomain: "kwitter-f90b8.firebaseapp.com",
    databaseURL: "https://kwitter-f90b8-default-rtdb.firebaseio.com",
    projectId: "kwitter-f90b8",
    storageBucket: "kwitter-f90b8.appspot.com",
    messagingSenderId: "255459163321",
    appId: "1:255459163321:web:00687bc63d4da812e82f68",
    measurementId: "G-QJZ4VNY3BH"
  };
firebase.initializeApp(firebaseConfig);

document.getElementById("user_name").innerHTML = "Welcome, " + localStorage.getItem("user_name") + "!";

function getData() {
    firebase.database().ref("/").on('value',function(snapshot) {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;
//Start code
        console.log("Room Name - " + Room_names); 
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row;
        console.log("Room Name - " + Room_names);
//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function addRoom(){
    var room_name = document.getElementById("room_name").value;
	
    firebase.database().ref("/").child(room_name).update({
	   purpose : "adding room name"
	});
	
	localStorage.setItem("room_name", room_name);
	
	window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}