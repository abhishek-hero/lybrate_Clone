function success(){
    window.location.href = "success.html"
}

let add = JSON.parse(localStorage.getItem("totalPrice"))

function total(){
    let heading = document.getElementById("total_payable")
    heading.innerHTML = `Total Payable Amount  - ₹ ${add.totalPrice}`
}

total()
