// crousal Start


var slidePosition = 0;


function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) {
        slidePosition = 1
    }
    slides[slidePosition - 1].style.display = "block";
    setTimeout(SlideShow, 2000); // Change image every 2 seconds
}
SlideShow();

//    crousal End



//Show1
function show1(productShow1_arr) {
    var data_div = document.getElementById("product_div");
    productShow1_arr.forEach(function (product) {

        //let heading=document.getElementsByClassName("product_heading")

        let show1 = document.getElementById("show1");

        let div = document.createElement("div")
        div.style.border = "2px solid #E8C9BE"
        div.style.paddingTop = "33%"
        let p_name = document.createElement("p")
        p_name.innerText = product.name
        p_name.style.fontWeight = `600`
        p_name.style.fontSize = `14.5px`
        p_name.style.padding = `4px`

        let price = document.createElement("p")

        let offer = document.createElement("span");
        offer.innerText = product.off
        offer.style.paddingRight = `8px`
        offer.style.color = `#C82506`
        offer.style.fontSize = `18.5px`
        offer.style.fontWeight = `600`

        let p_price = document.createElement("span")
        p_price.innerText = product.price
        p_price.style.fontWeight = `600`
        p_price.style.fontSize = `14px`
        p_price.style.textDecoration = "line-through";


        let p_image = document.createElement("img");
        p_image.src = product.image


        let time = document.createElement("p");
        time.style.color = `#259b24`
        time.style.fontSize = `14px`
        // Set the date we're counting down to
        var countDownDate = new Date("Sep 5, 2022 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            time.innerHTML = "Ends in " + days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(y);
                time.innerHTML = "EXPIRED";
            }
        }, 1000);

        div.onclick = function () {
            details(product._id);
        };

        price.append(offer, p_price)
        div.append(p_image, p_name, price, time)
        show1.append(div)

        data_div.append(show1)


    });
}
// show1();


//show2
function show2(productShow2_arr) {
    var data_div = document.getElementById("product_div");
    productShow2_arr.forEach(function (product) {

        let show2 = document.getElementById("show2");

        let div = document.createElement("div")
        div.style.border = "1px solid #eeee"
        div.style.padding = "16px"
        div.style.backgroundColor = "white"
        let p_name = document.createElement("p")
        p_name.innerText = product.name
        p_name.style.fontWeight = `600`
        p_name.style.fontSize = `14.5px`
        p_name.style.padding = `4px`


        let price = document.createElement("p")
        price.style.fontSize = `14px`

        let p_price = document.createElement("span")
        p_price.innerText = `₹ ` + product.price
        p_price.style.color = `#C82506`
        p_price.style.fontWeight = `600`

        let a_price = document.createElement("span");
        a_price.innerHTML = product.actualPrice;
        a_price.style.color = `#6c6a6a`
        a_price.style.textDecoration = "line-through"
        a_price.style.marginLeft = `2px`

        let offer = document.createElement("span")
        offer.innerText = product.off;
        offer.style.color = `#259b24`
        offer.style.marginLeft = `2px`


        let p_image = document.createElement("img");
        p_image.src = product.image1;

        div.onclick = function () {
            details(product._id);
        };

        price.append(p_price, a_price, offer)
        div.append(p_image, p_name, price)
        show2.append(div)


        data_div.append(show2)


    });
}




//Show the bannner

function banner(Product_banner) {
    Product_banner.forEach(function (product) {

        let banner_body = document.getElementById("banner");
        let div = document.createElement("div")

        div.style.width = "100%"
        let p_image = document.createElement("img");
        p_image.src = product.image;
        p_image.style.width = "100%"

        div.append(p_image);
        banner_body.append(div)

    });
}


// //product after Banner  column 1
function show4(productShow4_arr) {
    var data_div = document.getElementById("product_div2");
    productShow4_arr.forEach(function (product) {

        let show4 = document.getElementById("show4");

        let div = document.createElement("div")
        div.style.border = "2px solid #eeee"
        div.style.padding = "16px"
        div.style.backgroundColor = "white"
        let p_name = document.createElement("p")
        p_name.innerText = product.name
        p_name.style.fontWeight = `600`
        p_name.style.fontSize = `14.5px`
        p_name.style.padding = `4px`


        let price = document.createElement("p")
        price.style.fontSize = `14px`

        let p_price = document.createElement("span")
        p_price.innerText = `₹ ` + product.price
        p_price.style.color = `#C82506`
        p_price.style.fontWeight = `600`

        let a_price = document.createElement("span");
        a_price.innerHTML = product.actualPrice;
        a_price.style.color = `#6c6a6a`
        a_price.style.textDecoration = "line-through"
        a_price.style.marginLeft = `2px`

        let offer = document.createElement("span")
        offer.innerText = product.off;
        offer.style.color = `#259b24`
        offer.style.marginLeft = `2px`


        let p_image = document.createElement("img");
        p_image.src = product.image1;

        div.onclick = function () {
            details(product._id);
        };

        price.append(p_price, a_price, offer)
        div.append(p_image, p_name, price)
        show4.append(div)


        data_div.append(show4)


    });
}
// show4();

// // column2
function show5(productShow5_arr) {
    var data_div = document.getElementById("product_div2");
    productShow5_arr.forEach(function (product) {

        let show5 = document.getElementById("show5");

        let div = document.createElement("div")
        div.style.border = "2px solid #eeee"
        div.style.backgroundColor = "white"
        div.style.padding = "16px"
        let p_name = document.createElement("p")
        p_name.innerText = product.name
        p_name.style.fontWeight = `600`
        p_name.style.fontSize = `14.5px`
        p_name.style.padding = `4px`

        let price = document.createElement("p")
        price.style.fontSize = `14px`

        let p_price = document.createElement("span")
        p_price.innerText = `₹ ` + product.price
        p_price.style.color = `#C82506`
        p_price.style.fontWeight = `600`

        let a_price = document.createElement("span");
        a_price.innerHTML = product.actualPrice;
        a_price.style.color = `#6c6a6a`
        a_price.style.textDecoration = "line-through"
        a_price.style.marginLeft = `2px`

        let offer = document.createElement("span")
        offer.innerText = product.off;
        offer.style.color = `#259b24`
        offer.style.marginLeft = `2px`


        let p_image = document.createElement("img");
        p_image.src = product.image1;

        div.onclick = function () {
            details(product._id);
        };

        price.append(p_price, a_price, offer)
        div.append(p_image, p_name, price)
        show5.append(div)

        data_div.append(show5)


    });
}
// show5();


// //Go to detail page of that product

function details(id) {

    window.location.href =`http://localhost:3000/products/${id}`;
    // localStorage.setItem("myProducts", JSON.stringify(product));


}


// let userDetails = JSON.parse(localStorage.getItem("details"))

// let userName = document.querySelector(".top_a")

// try {
//     if (userDetails.length != null) {
//         userName.innerText = `Hello ${userDetails[0].name} `
//         userName.style.backgroundColor = "white"
//         userName.style.marginTop = `-8% !important`
//         userName.style.fontSize = `14.5px`
//         userName.style.marginLeft = `-18%`
//         userName.style.border = "none"
//         userName.style.outLine = "none"
//         userName.style.fontWeight = "200"

//         let aero = document.createElement("span")
//         aero.setAttribute("class", "fas fa-angle-down")

//         userName.append(aero)

//     }

// } catch (error) {
//     console.log("Please Login",error);
// }

// userName.innerText = `Hello ${userDetails[0].name} `
// userName.style.backgroundColor = "white"
// userName.style.marginTop = `-8% !important`
// userName.style.fontSize = `14.5px`
// userName.style.marginLeft = `-18%`
// userName.style.border = "none"
// userName.style.outLine = "none"
// userName.style.fontWeight = "200"

// let aero = document.createElement("span")
// aero.setAttribute("class", "fas fa-angle-down")

// userName.append(aero)

async function dummy(){
    const res = await fetch('http://localhost:3000/getproduct')
 
    const and = await res
    console.log(and);
}


dummy()