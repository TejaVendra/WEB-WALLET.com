// Check if the intro has already been shown
if (sessionStorage.getItem("introShown")) {
    // Intro already shown, hide it and show the login form
    document.getElementById("introSection").style.display = "none";
    document.getElementById("loginSection").style.display = "flex";
  } else {
    // Intro not shown yet, mark it as shown and wait for the video to finish
    sessionStorage.setItem("introShown", "true");
    setTimeout(function () {
      document.getElementById("introSection").style.display = "none";
      document.getElementById("loginSection").style.display = "flex";
    }, 5000); // 5000ms = 5 seconds
  }
  
  // Login Form Logic
  let enterButton = document.getElementById("enterButton");
  let Notice = document.getElementById("notice");
  
  enterButton.onclick = function () {
    let userName = document.getElementById("Name").value.trim();
    let atmNumber = document.getElementById("atmNumber").value.trim();
  
    if (userName === "" || atmNumber === "") {
      Notice.textContent = "*Please enter all the values";
    } else if (!/^[A-Za-z]+$/.test(userName)) {
      Notice.textContent = "*Name should only contain alphabetic characters";
    } else if (atmNumber.length !== 6 || isNaN(atmNumber)) {
      Notice.textContent = "*ATM number must be exactly 6 digits";
    } else {
      let lowerText = userName.toLowerCase();
  
      if (lowerText.includes("akash")) {
        window.location.href = "akashSecond.html";
      } else if (lowerText.includes("akhil")) {
        window.location.href = "akhilSecond.html";
      } else if (lowerText.includes("vishruth")) {
        window.location.href = "vishruthSecond.html";
      } else if (lowerText.includes("sandeep")) {
        window.location.href = "sandeepSecond.html";
      } else if (lowerText.includes("vishnu")) {
        window.location.href = "vishnuSecond.html";
      } else {
        window.location.href = "second.html";
      }
    }
  };