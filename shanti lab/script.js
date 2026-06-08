AOS.init({
duration:1000,
once:true
});

const collectionType =
document.getElementById("collectionType");

const extraCharge =
document.getElementById("extraCharge");

const addressField =
document.getElementById("address");

collectionType.addEventListener("change",function(){

if(this.value==="Home Collection"){

extraCharge.style.display="block";
addressField.style.display="block";

}else{

extraCharge.style.display="none";
addressField.style.display="none";

}

});

document
.getElementById("bookingForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let mobile =
document.getElementById("mobile").value;

let packageName =
document.getElementById("package").value;

let date =
document.getElementById("date").value;

let collection =
document.getElementById("collectionType").value;

let address =
document.getElementById("address").value;

let extraAmount = 0;

if(collection==="Home Collection"){
extraAmount=300;
}

let message =
`🔬 SHANTI DIAGNOSTIC LAB & X-RAY

📋 NEW BOOKING

👤 Name: ${name}

📞 Mobile: ${mobile}

🧪 Package: ${packageName}

📅 Date: ${date}

🚗 Collection Type: ${collection}

🏠 Address: ${address}

💰 Extra Charge: ₹${extraAmount}`;

let whatsappURL =
`https://wa.me/917014357919?text=${encodeURIComponent(message)}`;

window.open(whatsappURL,"_blank");

});

document
.getElementById("mobile")
.addEventListener("input",function(){

this.value =
this.value.replace(/[^0-9]/g,'');

if(this.value.length>10){
this.value=this.value.slice(0,10);
}

});

window.addEventListener("scroll",function(){

let header =
document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow =
"0 5px 20px rgba(0,0,0,0.15)";

}else{

header.style.boxShadow =
"0 2px 15px rgba(0,0,0,0.08)";

}

});