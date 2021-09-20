var checkout_obj = JSON.parse(localStorage.getItem('Direct_Buy'));
       
var counter=1;
var total_price=checkout_obj.price;
var totak_disct=checkout_obj.actualPrice;
// var total_price=0;
// var totak_disct=0;


function showProduct(){
    let heading = document.getElementById('pay_heading');
    let brand = document.getElementById('pay_brand');
    let para = document.getElementById('pay_descr');
    let price = document.getElementById('pay_price');
    let disct = document.getElementById('pay_disct');
    
   

   
    
    heading.textContent=checkout_obj.name;
    para.textContent=checkout_obj.details;
    brand.textContent=checkout_obj.brand;
    price.textContent=`₹ ${total_price}`;
    disct.textContent=`₹ ${totalk_disct}`;

//     price.textContent=`₹ ${checkout_obj.price}`;
//     disct.textContent=`₹ ${checkout_obj.actualPrice}`;
   
    price.style.fontSize='15px'
    disct.style.fontSize='12px'
    disct.style.textDecoration='line-through'
    disct.style.marginTop='7px';


    let totalobj={
        totalPrice:total_price,
        totalDiscount:totalk_disct,
        quantity:counter
    }

    localStorage.setItem('totalPrice',JSON.stringify(totalobj))
   
}


showProduct()

let add = document.getElementById('plus_icon');
let minus = document.getElementById('minus_icon');

function addtion(){
    counter++;
    let number = document.getElementById('number');
    let price = document.getElementById('pay_price');
    let disct = document.getElementById('pay_disct');
    total_price=Number(checkout_obj.price)*counter;
    totak_disct=Number(checkout_obj.actualPrice)*counter;
    price.textContent=`₹ ${total_price}`;
    disct.textContent= `₹ ${totak_disct}`
    localStorage.setItem('totalPrice',(total_price))

    number.textContent=counter;

    let totalobj={
        totalPrice:total_price,
        totalDiscount:totak_disct,
        quantity:counter
    }

    localStorage.setItem('totalPrice',JSON.stringify(totalobj))
    
}


function subtraction(){
    counter--;
    let number = document.getElementById('number');
    let price = document.getElementById('pay_price');
    let disct = document.getElementById('pay_disct');
    total_price=Number(checkout_obj.price)*counter;
    totak_disct=Number(checkout_obj.actualPrice)*counter;
    price.textContent=`₹ ${total_price}`;
    disct.textContent= `₹ ${totak_disct}`
    minus.style.color='black';
    number.textContent=counter;
    let totalobj={
        totalPrice:total_price,
        totalDiscount:totak_disct,
        quantity:counter
    }

    localStorage.setItem('totalPrice',JSON.stringify(totalobj))
    
   
    if(counter==0){
        counter=1;
        total_price=Number(checkout_obj.price)*counter;
        totak_disct=Number(checkout_obj.actualPrice)*counter;
        price.textContent=`₹ ${total_price}`;
        disct.textContent= `₹ ${totak_disct}`;
    
        let totalobj={
        totalPrice:total_price,
        totalDiscount:totak_disct,
        quantity:counter,
            }
            number.textContent=counter;
    localStorage.setItem('totalPrice',JSON.stringify(totalobj))
        minus.style.color='grey'
    }

    
}



add.addEventListener('click',addtion);
minus.addEventListener('click',subtraction);

let addr_div= document.getElementById('address');


function lengths(){
   let len = document.getElementById('address').value;
  len = len.length;
  let char = document.getElementById('char_length');
  char.textContent=`${len} / 200`
}


function chechoutClick(){
    let Name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let City = document.getElementById('city').value;
    let code = document.getElementById('code').value;
    let adr = document.getElementById('address').value;


    if(Name==="" || phone==="" || City==="" || phone.length!==10 || code ==="" || code.length!==6 || adr==="" || adr.length<20){
        alert('Please fill The Required Fields')
        
    }
    else{
        let cust_detail={
            name:Name,
            number:phone,
            city:City,
            pincode:code,
            adress:adr
        }

        localStorage.setItem('cust_details',JSON.stringify(cust_detail))
        window.location.href='pay.html'
    }
    
}


let btn = document.getElementById('check_btn');
btn.addEventListener('click',chechoutClick)


