const firebaseConfig = {
  apiKey: "AIzaSyDftzD6r6egaLRPgG_lUPZa9lSSNqVlcX8",
  authDomain: "projeto2miateste-ddbf2.firebaseapp.com",
  projectId: "projeto2miateste-ddbf2",
  storageBucket: "projeto2miateste-ddbf2.appspot.com",
  messagingSenderId: "1080394016362",
  appId: "1:1080394016362:web:4884a377629ee2b9954c13",
};

firebase.initializeApp(firebaseConfig);

/*
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {
  const email = emailField.value;
  const password = passwordField.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((useCredential) => {
      const user = useCredential.user;
      console.log("Usuário logado: ", user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Erro de autenticação: ", errorMessage);
    });
});
*/
