let amount = sessionStorage.getItem("amount");
document.getElementById("test").textContent = amount;


document.getElementById("backBtn").onclick = function(){
    window.location.href = "firstCondition.html";
}
document.getElementById("printBtn").onclick = function(){
    window.print();
}

function updateDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const dateTime = `${date} ${time}`;

    
    document.getElementById('DateAndTime').textContent = dateTime;
}
setInterval(updateDateTime, 1000);
updateDateTime();

