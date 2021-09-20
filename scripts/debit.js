let submit = document.getElementById("submit")
let Price = document.getElementById('total');

let totalDetaild= JSON.parse(localStorage.getItem('totalPrice'));

Price.textContent=`Total Amount Payable :  ₹${totalDetaild.totalPrice}`;

submit.onclick = function (){
    let data = document.getElementByClassName("required").value;
    if(data.length == 0){
alert("Fill all credentials")
    }else {
window.location.href = "success.html"
    }
}
