let totalAddedProduct = JSON.parse(localStorage.getItem('cart_arr'));

var cart_page_arr = [];

var total_bill = 0;
var total_actual = 0;

function show_quantity() {
    var data_div = document.getElementById("details");
    totalAddedProduct.forEach(function (product) {

        var showcol1 = document.getElementById("detais_of_product")

        var div = document.createElement("div")
        div.style.display = "flex";
        div.style.columnGap = `6%`
        div.style.width = `100%`;
        div.style.height = `80px`
        div.style.backgroundColor = "white"
        div.style.border = `1px solid #dce0e0`

        let p_image = document.createElement("img");
        p_image.src = product.image1;
        p_image.style.width = `50px`
        p_image.style.height = `50px`
        p_image.style.padding = "auto"
        p_image.style.marginTop = "auto"
        p_image.style.marginBottom = "auto"
        p_image.style.marginLeft = `10px`


        var p_name = document.createElement("p");
        p_name.innerHTML = product.name;
        p_name.style.marginTop = "auto"
        p_name.style.marginBottom = "auto"
        p_name.style.padding = `0px 16px`
        p_name.style.fontSize = `14.5px`

        var price = document.createElement("p");
        price.style.marginTop = "auto"
        price.style.marginBottom = "auto"
        price.style.fontSize = `14.5px`

        var p_price = document.createElement("span");
        p_price.innerHTML = `₹ ` + product.price;
        p_price.style.color = `#C82506`
        // p_price.style.marginLeft = `20px`


        var actualPrice = document.createElement("span");
        actualPrice.innerHTML = product.actualPrice;
        actualPrice.style.textDecoration = "line-through"
        actualPrice.style.marginLeft = `4px`

        var label = document.createElement("label");
        label.innerHTML = "Quantity";
        label.style.marginTop = "auto"
        label.style.marginBottom = "auto"
        label.style.marginLeft = `30px`
        label.style.fontSize = `12.5px`

        var quantity = document.createElement("input");
        quantity.type = "number";
        quantity.setAttribute('class', 'select_quan')
        quantity.setAttribute('value', '1')

        var val = quantity.value
        console.log(val);


        //new array data creation
        total_bill += Number(product.price);
        total_actual += Number(product.actualPrice)


        productPrice(product);

        var btn = document.createElement("button");
        btn.innerHTML = "Remove";
        btn.style.padding = `0px 5px`;
        btn.style.height = `30px`
        btn.style.marginTop = "auto"
        btn.style.marginBottom = "auto"

        btn.onclick = function () {
            removeItem(product);
        }

        label.append(quantity)
        price.append(p_price, actualPrice);

        div.append(p_image, p_name, price, label, btn)
        showcol1.append(div)
        data_div.append(showcol1)


    });


}
show_quantity();



total_discount = Number(total_actual - total_bill)
var cartTotal = Number(total_bill + 40);
var cashBack = Math.floor(Number(total_bill * .1))
var obj = { "totalPrice": total_actual, "totalDiscount": total_discount, "cart_total_price": cartTotal, "cash_back_Earned": cashBack }
cart_page_arr.push(obj)

//     function btnSection(){

// var data_div = document.getElementById("details");
// var div2=document.createElement("div")
//     div2.style.width = `100%`;
//     div2.style.height = `80px`
//     div2.style.backgroundColor = "white"
//     div2.style.border = `1px solid #dce0e0`

//     var addproduct=document.createElement("button");
//     addproduct.innerHTML="Add More Product"
//     var proceedToPay=document.createElement("button");
//     proceedToPay.innerHTML="Proceed To Checkout"

//     div2.append(addproduct, proceedToPay);
//     data_div.append(div2)
// }
// btnSection();


function showOrderSummary() {
    var data_div = document.getElementById("details");
    cart_page_arr.forEach(function (product) {
        var rate = document.createElement("div")
        rate.style.backgroundColor = `#ffffff`
        rate.style.color = `#222222`
        rate.style.padding = `16px`

        var heading = document.createElement("p")
        heading.style.fontSize = `14.5px`
        heading.innerText = "ORDER SUMMARY"
        heading.style.backgroundColor = `#ffffff`
        heading.style.display = "flex"

        var hr1 = document.createElement("hr")
        // mrp start
        var total_mrp = document.createElement("div")
        total_mrp.style.backgroundColor = `#ffffff`
        total_mrp.style.display = "flex"
        total_mrp.style.fontSize = `14.5px`

        var mrp_tag = document.createElement("p");
        mrp_tag.innerHTML = "Total Price"


        var grow = document.createElement("p");
        grow.style.flexGrow = "1"

        var mrp = document.createElement("p")
        mrp.innerHTML = `₹ ` + product.totalPrice

        total_mrp.append(mrp_tag, grow, mrp)
        // mrp End  

        var shiping_section = document.createElement("div")
        shiping_section.style.display = "flex"
        shiping_section.style.fontSize = `14.5px`

        var shiping_tag = document.createElement("p");
        shiping_tag.innerHTML = "Shhiping Charge"

        var grow2 = document.createElement("p");
        grow2.style.flexGrow = "1"

        var shiping_charge = document.createElement("p");
        shiping_charge.innerHTML = `₹40`

        shiping_section.append(shiping_tag, grow2, shiping_charge);


        var discount_section = document.createElement("div")
        discount_section.style.display = "flex"
        discount_section.style.fontSize = `14px`

        var discount_tag = document.createElement("p");
        discount_tag.innerHTML = "Total Discount"

        var grow3 = document.createElement("p");
        grow3.style.flexGrow = "1"

        var discount = document.createElement("p");
        discount.innerHTML = `- ₹ ` + product.totalDiscount

        discount_section.append(discount_tag, grow3, discount);

        var hr2 = document.createElement("hr");


        //cart total

        var cart_section = document.createElement("div");
        cart_section.style.display = "flex"
        cart_section.style.fontSize = `14.5px`

        var cart_total = document.createElement("p");
        cart_total.innerText = "Cart Total";

        var grow4 = document.createElement("p");
        grow4.style.flexGrow = "1"

        var cart_total_price = document.createElement("p");
        cart_total_price.innerHTML = `₹ ` + product.cart_total_price;

        cart_section.append(cart_total, grow4, cart_total_price);


        var ammount_section = document.createElement("div");
        ammount_section.style.display = "flex"
        ammount_section.style.fontSize = `18.5px`
        ammount_section.style.fontWeight = `600`

        var amount_tag = document.createElement("p")
        amount_tag.innerText = "Amount Payable"

        var grow5 = document.createElement("p");
        grow5.style.flexGrow = "1"

        var total_amount = document.createElement("p");
        total_amount.innerHTML = `₹ ` + product.cart_total_price

        ammount_section.append(amount_tag, grow5, total_amount)

        var hr3 = document.createElement("hr")


        var gold_member_section = document.createElement("div");
        gold_member_section.style.display = "flex"
        gold_member_section.style.fontSize = `14.5px`
        gold_member_section.marginBottom = `10px`

        var gold = document.createElement("p");

        var logo = document.createElement("span")
        logo.setAttribute('class', 'fas fa-plus-square');
        logo.style.color = `#FFC400`
        logo.style.marginRight = `3px`

        var gold_txt = document.createElement("span")
        gold_txt.innerText = "LybrateCash to be Earned "
        gold_txt.style.color = `#C82506`

        var grow6 = document.createElement("p");
        grow6.style.flexGrow = "1"

        var gold_cashback = document.createElement("p")
        gold_cashback.innerHTML = `₹ ` + product.cash_back_Earned

        gold.append(logo, gold_txt);
        gold_member_section.append(gold, grow6, gold_cashback)

        var note = document.createElement("p");
        note.innerText = `*Note: LybrateCash of ` + `₹ ` + product.cash_back_Earned + ` will be credited to your account upon product delivery`
        note.style.marginLeft = `-7px`
        note.style.display = "flex"
        note.style.color = `#9E9E9E`
        note.style.fontSize = `12.5px`


        var safty = document.createElement("div");
        safty.style.marginTop = `10px`
        safty.style.display = "flex"
        safty.style.fontWeight = "lighter"

        var logo1_div = document.createElement("div")
        logo1_div.style.borderRadius = `0px`
        logo1_div.style.padding = `0px 12px`
        logo1_div.style.fontWeight = `600`
        logo1_div.style.fontSize = `14px`
        logo1_div.style.color = `#000000`

        var logo1 = document.createElement("p")
        logo1.setAttribute('class', 'fas org_red fa-check-circle')
        logo1.style.textAlign = "center"
        logo1.style.margin = "auto"
        logo1.style.color = `#dd5a62`

        var logo1_txt = document.createElement("p");
        logo1_txt.innerText = "100% authentic product"
        logo1_txt.style.textAlign = "center"
        logo1_div.append(logo1, logo1_txt)

        //
        var logo2_div = document.createElement("div")
        logo2_div.style.borderRadius = `0px`
        logo2_div.style.padding = `0px 12px`
        logo2_div.style.fontWeight = `600`
        logo2_div.style.fontSize = `14px`
        logo2_div.style.color = `#000000`

        var logo2 = document.createElement("p")
        logo2.setAttribute('class', 'fas gren fa-money-bill')
        logo2.style.textAlign = "center"
        logo2.style.margin = "auto"
        logo2.style.color = `#509a75`

        var logo2_txt = document.createElement("p");
        logo2_txt.innerText = "Safe and Secure Payments"
        logo2_txt.style.textAlign = "center"
        logo2_div.append(logo2, logo2_txt)

        //

        var logo3_div = document.createElement("div")
        logo3_div.style.borderRadius = `0px`
        logo3_div.style.padding = `0px 12px`
        logo3_div.style.fontWeight = `600`
        logo3_div.style.fontSize = `14px`
        logo3_div.style.color = `#000000`

        var logo3 = document.createElement("p")
        logo3.setAttribute('class', 'fas purple fa-hand-holding-usd')
        logo3.style.textAlign = "center"
        logo3.style.margin = "auto"
        logo3.style.color = `rebeccapurple`

        var logo3_txt = document.createElement("p");
        logo3_txt.innerText = "Assured Best Price"
        logo3_txt.style.textAlign = "center"
        logo3_div.append(logo3, logo3_txt)



        safty.append(logo1_div, logo2_div, logo3_div)

        var banner = document.createElement("div")
        banner.style.display = "flex"
        banner.style.textAlign = "center"
        banner.style.margin = "auto"
        banner.style.padding = `10px`
        banner.style.marginTop = `10px`
        banner.style.backgroundColor = `#ffffff`

        var banner1 = document.createElement("img")
        banner1.src = "https://www.lybrate.com/img/rapid-ssl.png"

        var banner2 = document.createElement("img")
        banner2.src = "https://www.lybrate.com/img/payu-money.png"
        banner2.style.margin = "auto"

        var banner3 = document.createElement("img")
        banner3.src = "https://assets.lybrate.com/q_auto,f_auto/imgs/product/icons/PayPal_logo.png"

        banner.append(banner1, banner2, banner3)
        rate.append(heading, hr1, total_mrp, shiping_section, discount_section, hr2, cart_section, ammount_section, hr3,
            gold_member_section, note, safty, banner)
        data_div.append(rate)
    });

}


showOrderSummary();




function removeItem(p) {
    totalAddedProduct.pop(p)


}

function productPrice(product) {
    var quan = document.getElementsByTagName("input").value;
    // console.log(quan)
}
productPrice();


function btnDiv() {
    var btn_div = document.getElementById("btn");
    btn_div.style.display = "block"
    btn_div.style.display = "flex"
    btn_div.style.width = `99.5%`;
    btn_div.style.height = `60px`
    btn_div.style.backgroundColor = "white"
    btn_div.style.border = `3px solid #dce0e0`
    btn_div.style.boxShadow = `5px`
    btn_div.style.flexDirection = "row-reverse"
    btn_div.style.columnGap = `8px`



    var proceedToBuy = document.createElement("button")
    proceedToBuy.innerText = "Proceed To Pay"
    proceedToBuy.style.padding = `0px 8px`
    proceedToBuy.style.marginRight = `8px`
    proceedToBuy.style.marginTop = "auto"
    proceedToBuy.style.fontSize = `14.5px`
    proceedToBuy.style.marginBottom = "auto"
    proceedToBuy.style.minHeight = `36px`
    proceedToBuy.style.minWidth = `88px`
    proceedToBuy.style.fontWeight = `600`
    proceedToBuy.style.textAlign = "center"
    proceedToBuy.style.color = `#ffffff`
    proceedToBuy.style.border = `1px solid #c82506`
    proceedToBuy.style.backgroundColor = `#c82506`
    proceedToBuy.style.borderRadius = `2px`



    var addToCart = document.createElement("button")
    addToCart.innerText = "Add More Product"
    addToCart.style.padding = `0px 8px`
    addToCart.style.marginTop = "auto"
    addToCart.style.fontSize = `14.5px`
    addToCart.style.marginBottom = "auto"
    addToCart.style.minHeight = `36px`
    addToCart.style.minWidth = `88px`
    addToCart.style.fontWeight = `600`
    addToCart.style.textAlign = "center"
    addToCart.style.color = `#c82506`
    addToCart.style.border = `1px solid #c82506`
    addToCart.style.backgroundColor = `#ffffff`

    btn_div.append(proceedToBuy, addToCart);

}

btnDiv();