let cust_detail = JSON.parse(localStorage.getItem('cust_details'));
let totalpayable = JSON.parse(localStorage.getItem('payable'))

function showprodDetailds(detail) {

    let heading = document.getElementById('heading_name');
    let brand = document.getElementById('brand');
    let full_name = document.getElementById('full_name');
    let price = document.getElementById('totalp');
    let qty = document.getElementById('qty');
    let amt = document.getElementById('amt')

    amt.innerHTML = `₹ ${totalpayable.price}`

    heading.textContent = detail.name;
    brand.textContent = detail.brand;
    heading.style.fontSize = '15px';
    brand.style.fontSize = '12px';
    full_name.textContent = `${cust_detail.name}`;
    qty.innerHTML = `Address : ${cust_detail.adress}`

}

function applyDisct() {
    let code = document.getElementById('disct_input').value;

    if (code === 'masai30') {
        let price = orderDetails.totalPrice;
        let disct = (price * 20) / 100;
    }
}


function debit(){
    window.location.href=`http://localhost:3000/products/cart/checkout/debit`
}