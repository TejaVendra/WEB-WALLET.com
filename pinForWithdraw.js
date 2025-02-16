let button01 = document.getElementById("inpBut01");
let button02 = document.getElementById("inpBut02");
let button03 = document.getElementById("inpBut03");
let button04 = document.getElementById("inpBut04");
let button05 = document.getElementById("inpBut05");
let button06 = document.getElementById("inpBut06");
let button07 = document.getElementById("inpBut07");
let button08 = document.getElementById("inpBut08");
let button09 = document.getElementById("inpBut09");
let button10 = document.getElementById("inpBut10");
let button11 = document.getElementById("inpBut11");
let button12 = document.getElementById("inpBut12");
let enterButton = document.getElementById("enterButton");
let cancelButton = document.getElementById("cancelButton");
let clearButton = document.getElementById("clearButton");
let alertMessage = document.getElementById("alertMessage");





let inputDisplay = document.getElementById("inputDisplay");

document.querySelectorAll(".inputNumberBox button").forEach(button => {
    button.onclick = function () {
        let value = button.textContent;
        if (value !== "*" && value !== "#" && inputDisplay.value.length < 4) {
            inputDisplay.value += value;
        }
    };
});

document.getElementById("clearButton").onclick = function () {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
};

document.getElementById("cancelButton").onclick = function () {
    inputDisplay.value = "";
};

document.getElementById("enterButton").onclick = function () {
    if (inputDisplay.value.length === 4) {
         window.location.href = "withdrawCash.html";
    }
    else if(inputDisplay.value === ""){
        alertMessage.textContent = "*Enter the pin!";
    } else {
        alertMessage.textContent = "*PIN must be exactly 4 digits!";
    }
};
