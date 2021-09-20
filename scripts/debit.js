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

let add = JSON.parse(localStorage.getItem("totalPrice"))

function total(){
    let heading = document.getElementById("total_payable")
    heading.innerHTML = `Total Payable Amount  - ₹ ${add.totalPrice}`
}

total()
