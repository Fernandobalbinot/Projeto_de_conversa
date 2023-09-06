// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyDEDCS24Es2ScT24LWMeAe99Ed_9knN4bg",
    authDomain: "projeto-de-conversa.firebaseapp.com",
    databaseURL: "https://projeto-de-conversa-default-rtdb.firebaseio.com/",
    projectId: "projeto-de-conversa",
    storageBucket: "projeto-de-conversa.appspot.com",
    messagingSenderId: "1075201338634",
    appId: "1:1075201338634:web:0825ca6c6db6830db25ef3"
  };
  
  // Initialize Firebase

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem("user_name", user_name);

   window.location = "chat_room.html";
}


