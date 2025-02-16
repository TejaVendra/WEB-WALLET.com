let withdraw = document.getElementById("withdrawButton");
let deposite = document.getElementById("depositeButton");
let enquiry = document.getElementById("enqiuryButton");

withdraw.onclick = function(){
    window.location.href = "pinForWithdraw.html";
}
deposite.onclick = function(){
    window.location.href = "pinForDeposit.html";
}
enquiry.onclick = function(){
    window.location.href = "pinForInquiry.html";
}