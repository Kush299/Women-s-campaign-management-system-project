const firebaseConfig = {

  apiKey: "AIzaSyCX3E3DLGbVqnMZJ0WknmnrNoQCUIZen2w",

  authDomain: "contactform-576bb.firebaseapp.com",

  databaseURL: "https://contactform-576bb-default-rtdb.firebaseio.com",

  projectId: "contactform-576bb",

  storageBucket: "contactform-576bb.appspot.com",

  messagingSenderId: "758464242786",

  appId: "1:758464242786:web:124491a2153284d61e5d3b",

  measurementId: "G-PJZBK7LW3F"

};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var campaignFormDB = firebase.database().ref("campaignDetails");

document.getElementById("campaignForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var campaigntitle = getElementVal("campaigntitle");
  var campaigndescription = getElementVal("campaigndescription");
  var campaigndate = getElementVal("campaigndate");

  saveMessages(campaigntitle, campaigndescription, campaigndate);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("campaignForm").reset();
}

const saveMessages = (campaigntitle, campaigndescription, campaigndate) => {
  var newCampaignForm = campaignFormDB.push();

  newCampaignForm.set({
    campaigntitle: campaigntitle,
    campaigndescription: campaigndescription,
    campaigndate: campaigndate,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};