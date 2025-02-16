function showPaymentSuccess() {
    const container = document.querySelector('.payment-success-container');
    container.style.display = 'block';
  }
  
  
  showPaymentSuccess();

  setTimeout(function(){
    window.location.href = "depositReceipt.html";
  },3000)