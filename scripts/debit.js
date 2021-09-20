let submit = document.getElementById("submit")
let Price = document.getElementById('total');

let totalDetaild= JSON.parse(localStorage.getItem('totalPrice'));

Price.textContent=`Total Amount Payable :  ₹${totalDetaild.totalPrice}`;

submit.onclick = function (){
    window.location.href = "success.html"
}
