// 🔥 Firebase Config (apna dalna agar different hai)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function searchReport() {
  const mobile = document.getElementById("mobile").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "Searching... ⏳";

  if (!mobile) {
    resultDiv.innerHTML = "Please enter mobile number ❌";
    return;
  }

  try {
    const docRef = await db.collection("patient").doc(mobile).get();

    if (!docRef.exists) {
      resultDiv.innerHTML = "No report found ❌";
      return;
    }

    const data = docRef.data();

    resultDiv.innerHTML = `
      <p><b>Name:</b> ${data.name || "N/A"}</p>
      <p><b>Mobile:</b> ${mobile}</p>
      <a href="${data.pdfLink}" target="_blank">📄 Download Report</a>
    `;

  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = "Error fetching report ❌";
  }
}