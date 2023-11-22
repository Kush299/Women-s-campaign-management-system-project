const firebaseConfig = {

  apiKey: "AIzaSyCX3E3DLGbVqnMZJ0WknmnrNoQCUIZen2w",

  authDomain: "contactform-576bb.firebaseapp.com",

  databaseURL: "https://contactform-576bb-default-rtdb.firebaseio.com",

  projectId: "contactform-576bb",

  storageBucket: "contactform-576bb.appspot.com",

  messagingSenderId: "758464242786",

  appId: "1:758464242786:web:7336f6c91adaefb11e5d3b",

  measurementId: "G-541Q05TN3G"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};