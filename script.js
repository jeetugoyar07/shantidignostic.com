AOS.init({
  duration: 1000,
  once: true
});

const images = [
  "photo/labphoto.jpg",
  "photo/lab2.jpg",
  "photo/lab3.jpg"
];

let index = 0;
const img = document.getElementById("slideImage");

// preload images (IMPORTANT)
images.forEach(src => {
  const i = new Image();
  i.src = src;
});

setInterval(() => {
  index = (index + 1) % images.length;

  // fade out
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = images[index];
    img.style.opacity = 1;
  }, 300);

}, 5000);

// COLLECTION LOGIC
const collectionType = document.getElementById("collectionType");
const extraCharge = document.getElementById("extraCharge");
const addressField = document.getElementById("address");

collectionType.addEventListener("change", function () {
  if (this.value === "Home Collection") {
    extraCharge.style.display = "block";
    addressField.style.display = "block";
  } else {
    extraCharge.style.display = "none";
    addressField.style.display = "none";
  }
});

// FORM
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let packageName = document.getElementById("package").value;
  let date = document.getElementById("date").value;
  let collection = document.getElementById("collectionType").value;
  let address = document.getElementById("address").value;

  let extraAmount = collection === "Home Collection" ? 300 : 0;

  let message = `Shanti Diagnostic Lab
Name: ${name}
Mobile: ${mobile}
Package: ${packageName}
Date: ${date}
Collection: ${collection}
Address: ${address}
Extra: ₹${extraAmount}`;

  let url = `https://wa.me/917014357919?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});