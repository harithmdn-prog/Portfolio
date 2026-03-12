const whatsappNumber = "60172126561"; // Replace with your WhatsApp number in international format without '+'

const prices = {

"iPhone 8": { lcd:120, battery:80 },
"iPhone 8 Plus": { lcd:150, battery:90 },

"iPhone X": { lcd:180, battery:100 },
"iPhone XR": { lcd:170, battery:100 },

"iPhone XS": { lcd:200, battery:110 },
"iPhone XS Max": { lcd:220, battery:110 },

"iPhone 11": { lcd:200, battery:120 },
"iPhone 11 Pro": { lcd:280, battery:130 },
"iPhone 11 Pro Max": { lcd:300, battery:130 },

"iPhone 12": { lcd:300, battery:140 },
"iPhone 12 Mini": { lcd:280, battery:140 },
"iPhone 12 Pro": { lcd:320, battery:150 },
"iPhone 12 Pro Max": { lcd:350, battery:150 },

"iPhone 13": { lcd:350, battery:160 },
"iPhone 13 Mini": { lcd:330, battery:160 },
"iPhone 13 Pro": { lcd:420, battery:180 },
"iPhone 13 Pro Max": { lcd:450, battery:180 },

"iPhone 14": { lcd:400, battery:190 },
"iPhone 14 Plus": { lcd:420, battery:190 },
"iPhone 14 Pro": { lcd:520, battery:210 },
"iPhone 14 Pro Max": { lcd:550, battery:210 },

"iPhone 15": { lcd:600, battery:230 },
"iPhone 15 Plus": { lcd:620, battery:230 },
"iPhone 15 Pro": { lcd:700, battery:250 },
"iPhone 15 Pro Max": { lcd:750, battery:250 }

};


const model = document.getElementById("model");
const service = document.getElementById("service");
const priceDisplay = document.getElementById("priceDisplay");

model.addEventListener("change",updatePrice);
service.addEventListener("change",updatePrice);


function updatePrice(){

let m = model.value;
let s = service.value;

if(!m || !s){
priceDisplay.innerText = "Estimated Price: -";
return;
}

let type = s.includes("LCD") ? "lcd" : "battery";

let price = prices[m][type];

priceDisplay.innerText = "Estimated Price: RM " + price;

}


function sendWhatsapp(){

let m = model.value;
let s = service.value;

if(!m || !s){
alert("Please select model and service");
return;
}

let text = `Hello, I would like to repair my ${m} for ${s}. Can I get more details?`;

let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

window.open(url,'_blank');

}



function sendCustomRequest(){

let model = document.getElementById("customModel").value;
let issue = document.getElementById("customIssue").value;

if(!model){
alert("Please enter your phone model");
return;
}

let text = `Hello, I want to repair a phone model not listed.

Model: ${model}

Issue: ${issue}`;

let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

window.open(url,'_blank');

}