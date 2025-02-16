function updateDateTime() {
      const now = new Date();

      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      const dateTime = `${date} ${time}`;

      
      document.getElementById('DateAndTime').textContent = dateTime;
}
setInterval(updateDateTime, 1000);
updateDateTime();
 

document.getElementById("submitButton").onclick = function(){
    window.print();
}

let num01 = Math.floor(Math.random()*9) + 1 ;
let num02 = Math.floor(Math.random()*9) + 1 ;
let num03 = Math.floor(Math.random()*9) + 1 ;
let num04 = Math.floor(Math.random()*9) + 1 ;
let num05 = Math.floor(Math.random()*9) + 1 ;
let num11 = Math.floor(Math.random()*9) + 1 ;
let num12 = Math.floor(Math.random()*9) + 1 ;
let num13 = Math.floor(Math.random()*9) + 1 ;
let num14 = Math.floor(Math.random()*9) + 1 ;
let num06 = "x";
let num07 = "x";
let num08 = "x";
let num09 = "x";
let num10 = "x";
num01 = String(num01);
num02 = String(num02);
num03 = String(num03);
num04 = String(num04);
num05 = String(num05);
num11 = String(num11);
num12 = String(num12);
num13 = String(num13);
num14 = String(num14);

let min = 500;
let max = 100000;
let accountNum = num01 + num02  + num03 + num04 + num05 + num06 + num07 + num08 + num09 + num10 + num11 + num12 + num13 + num14;
let balance = Math.floor(Math.random()*(max-min)) + min ;

document.getElementById("accountNumber").textContent = accountNum;
document.getElementById("balance").textContent = balance;



document.getElementById("backButton").onclick = function(){
    window.location.href = "firstCondition.html";
}