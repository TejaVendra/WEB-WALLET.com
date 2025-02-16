function showPaymentSuccess() {
    const container = document.querySelector('.payment-success-container');
    container.style.display = 'block';
  }
  
  
  showPaymentSuccess();

  setTimeout(function(){
    window.location.href = "withdrawReceipt.html";
  },3000)