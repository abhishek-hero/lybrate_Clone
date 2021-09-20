let detail = JSON.parse(localStorage.getItem('Direct_Buy'));
let orderDetails = JSON.parse(localStorage.getItem('totalPrice'))



function showprodDetailds(){

    let heading = document.getElementById('heading_name');
    let brand = document.getElementById('brand');
    let full_name = document.getElementById('full_name');
    let price= document.getElementById('totalp');
    let qty = document.getElementById('qty');
    let amt = document.getElementById('amt')


    heading.textContent=detail.name;
    brand.textContent= detail.brand;
    heading.style.fontSize='15px';
    brand.style.fontSize='12px';
    full_name.textContent=detail.fullName;
//     price.textContent= `₹ ${orderDetails.totalPrice}`;
    price.textContent= `₹ ${detail.price}`
    qty.textContent=`Quantity : ${orderDetails.quantity}`
    amt.textContent= `₹ ${detail.price}`
  
}

function applyDisct(){
    let code = document.getElementById('disct_input').value;
   
    if(code==='masai30'){
        let price =orderDetails.totalPrice;
        let disct= (price*20)/100;
