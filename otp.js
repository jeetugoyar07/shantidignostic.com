import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
RecaptchaVerifier,
signInWithPhoneNumber
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDZ3h5dY8QaDxmgDa6ICNUtz1FhwePxerI",
authDomain: "shanti-diagnostic-centre.firebaseapp.com",
projectId: "shanti-diagnostic-centre",
storageBucket: "shanti-diagnostic-centre.firebasestorage.app",
messagingSenderId: "589202645676",
appId: "1:589202645676:web:2c490532181a53b21b7509"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.recaptchaVerifier =
new RecaptchaVerifier(auth,"recaptcha-container",{});

window.sendOTP = async () => {

const phone =
document.getElementById("phone").value;

try {

const confirmationResult =
await signInWithPhoneNumber(
auth,
phone,
window.recaptchaVerifier
);

window.confirmationResult =
confirmationResult;

alert("OTP Sent");

}
catch(error){

alert(error.message);

}

};

window.verifyOTP = async () => {

const otp =
document.getElementById("otp").value;

try {

await window.confirmationResult.confirm(otp);

document.getElementById("result")
.innerHTML =
"Login Successful";

}
catch(error){

alert("Wrong OTP");

}

};