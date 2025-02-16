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
        if (value !== "*" && value !== "#" && inputDisplay.value.length < 6) {
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
    let amount = Number(inputDisplay.value); // Convert input to number

    if (!amount) {
        alertMessage.textContent = "*Enter the deposit amount!";
        inputDisplay.value = "";
    } else if (amount > 20000) {
        alertMessage.textContent = "*Amount does not exceed 20k";
        inputDisplay.value = "";
    } else if (amount % 100 !== 0) {
        alertMessage.textContent = "*Please enter valid notes";
        inputDisplay.value = "";
    } else {
        sessionStorage.setItem("amount", amount); 
        window.location.href = "secondCondition.html";
    }
};
