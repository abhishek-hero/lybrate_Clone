// let submit = document.getElementById("submit")
// let Price = document.getElementById('total');

// let totalDetaild= JSON.parse(localStorage.getItem('totalPrice'));

// Price.textContent=`Total Amount Payable :  ₹${totalDetaild.totalPrice}`;

// submit.onclick = function (){
//     window.location.href = "success.html"
// }

function sucess(){
    window.location.href = "success.html"
}

let add = JSON.parse(localStorage.getItem("payable"))

function total(){
    
    let Price = document.getElementById('total');
//     let heading = document.getElementById("total_payable")
    Price.innerHTML = `Total Payable Amount  - ₹ ${add.price}`
}

total()
