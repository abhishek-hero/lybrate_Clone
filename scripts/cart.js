var cart_obj = JSON.parse(localStorage.getItem('myProducts'));


function home(){
    window.location.href = "index.html"
}

function CartShow() {
    let left_div_img1 = document.getElementById('img_1');
    let left_div_img2 = document.getElementById('img_2');
    let left_div_img3 = document.getElementById('img_3');
    let left_div_img4 = document.getElementById('img_4');
    let head2 = document.getElementById('heading2');
    let price = document.getElementById('price');
    let details = document.getElementById('details');
    let date = document.getElementById('date');
    let prod_desc_1 = document.getElementById("descr_heading1");
    let prod_desc_2 = document.getElementById("descr_heading2");
    let prod_desc_3 = document.getElementById("descr_heading3");
    let act_price = document.getElementById('actual_price')
    let off_price = document.getElementById('price_off');
    let h_1 = document.getElementById('head_grey')
  



    
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');
    let img4 = document.createElement('img');
    head2.textContent = cart_obj.name;
    price.textContent = cart_obj.price;
    details.textContent = cart_obj.details;
    date.textContent = cart_obj.expiery;
    prod_desc_1.textContent=`What is ${cart_obj.name}`
    prod_desc_2.textContent=`Why Choose ${cart_obj.name}`
    prod_desc_3.textContent=`What are key benefits of ${cart_obj.name}?`;
    act_price.textContent=cart_obj.actualPrice;
    off_price.textContent=cart_obj.off
    h_1.textContent= cart_obj.brand
   
  

   

    img1.src = cart_obj.image1;
    img2.src = cart_obj.image2;
    img3.src = cart_obj.image3;
    img4.src = cart_obj.image4;


    left_div_img1.onclick=function(){
        imageChange(cart_obj.image1)
    }

    
    left_div_img2.onclick=function(){
        imageChange(cart_obj.image2)
    }

    
    left_div_img3.onclick=function(){
        imageChange(cart_obj.image3)
    }

    
    left_div_img4.onclick=function(){
        imageChange(cart_obj.image4)
    }

    left_div_img1.appendChild(img1);
    left_div_img2.appendChild(img2);
    left_div_img3.appendChild(img3);
    left_div_img4.appendChild(img4);

    let mid = document.getElementById('mid-img')
    let mid_img_div = document.getElementById('mid_img_div');


    mid.src = cart_obj.image1;

}


CartShow()

function imageChange(img){
    let mid_img = document.getElementById('mid-img');
    mid_img.src= img;
}



// for payment all the obj in this page would move to this JSON array

if (localStorage.getItem('cart_arr') === null) {
    localStorage.setItem('cart_arr', JSON.stringify([]));
}


function buyProd_1() {
    let arr = JSON.parse(localStorage.getItem('cart_arr'));

    arr.push(cart_obj);
  
    localStorage.setItem('cart_arr', JSON.stringify(arr));
    window.location.href='cart_page.html'

}


function buyProd_2(){
   
    cart_btn.textContent='Proceed to Buy'
    cart_btn.style.width='100%';
    cart_btn.style.backgroundColor='#259b24 '
    cart_btn.style.color='#ffff'
    cart_btn.style.border='none'
    buy_btn.style.display='none'
    cart_btn.style.fontSize='17px' 
    cart_btn.addEventListener('click',buyProd_1);
    // cart_btn.appendChild(a)
}


let cart_btn = document.getElementById('cart');
let buy_btn = document.getElementById('green')

function buyCheckout() {
    localStorage.setItem("Direct_Buy",JSON.stringify(cart_obj)); 
    window.location.href='buyCheckOut.html'
}
cart_btn.addEventListener('click',buyProd_2);

buy_btn.addEventListener('click',buyCheckout)