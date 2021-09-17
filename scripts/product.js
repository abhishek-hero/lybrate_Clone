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

let productShow1_arr = [{ "name": "Namyaa Intimate Hygiene Wash", "price": `₹244.00 `, "off": `₹1`, "image": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white//rio/800x800/Namyaa-Intimate-Wash1_v10.jpg" },
{ "name": "Diabex: Ayurvedic Diabetes Medicine", "price": `₹600.00 `, "off": `₹151`, "image": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/drvaidyas/dvmp/drvaidyas1/diabe1.jpg" }];

var productShow2_arr = [{
    "name": "Onelife BCAA – Green Apple", "price": `875.00 `, "actualPrice": `1749.00`, "off": ` 49%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_bcaa_ga.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_bcaa_ga1.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_bcaa_ga2.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_bcaa_ga3.jpg", "brand": "ONELIFE", "fullName": `Onelife BCAA – Green Apple (250 Gram)`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹1125 LybrateCash for your future purchases.`,
    "details": `Onelife BCAA Green Apple has a perfect ratio of 2:1:1 of Leucine:Iso-leucine:Valine and also has electrolytes to prevent muscle loss due to intensive workout and best way to gain muscles by repairing.`,
    "expiery": `Expiry Date: 30-Oct-2022`
},

{
    "name": "Resource High Protein Vanilla", "price": `675.00 `, "actualPrice": `900.00`, "off": ` 25%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/nestleresourcevanilla/Nestle1.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/nestleresourcevanilla/Nestle2.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/nestleresourcevanilla/Nestle4.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/nestleresourcevanilla/Nestle4.jpg", "brand": "NESTLE", "fullName": `RHP Vanilla 400g`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹1325 LybrateCash for your future purchases.`,
    "details": `A source of whey protein that provides high quality, easily digestible protein. Contains whey, which is one of the best dietary sources of high-quality protein. Resource® High Protein is a Protein Supplement. It is also Healthcare Nutrition Product.`,
    "expiery": `Expiry Date: 31-Aug-2021`
},

{
    "name": "Proburst Powerus Mass Gainer Powder", "price": `1349.00 `, "actualPrice": `1499.00`, "off": ` 10%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white//rio/800x800/PowerusMassGainerPowder(1kgChocolateFlavour)1_v10.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/resized1/PowerusMassGainerPowder(1kgChocolateFlavour)2.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/resized1/PowerusMassGainerPowder(1kgChocolateFlavour)3.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/resized1/PowerusMassGainerPowder(1kgChocolateFlavour)4.jpg", "brand": "PROBURST", "fullName": `Proburst Powerus Mass Gainer Powder (1kg, Chocolate Flavour)`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹651 LybrateCash for your future purchases.`,
    "details": `Advanced muscle building protein`,
    "expiery": `Expiry Date: 30-Oct-2022`
},

{
    "name": "Onelife Mass Gainer", "price": `2099.00 `, "actualPrice": `3599.00`, "off": ` 41%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/massgainer/massgainer1.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/massgainer/massgainer2.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/massgainer/massgainer3.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_mass_gainer3.jpg", "brand": "ONELIFE", "fullName": `Onelife Mass Gainer – Chocolate (3 Kg)`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹99 LybrateCash for your future purchases.`,
    "details": `Onelife Mass Gainer is a superior formulation that is designed to provide high-quality protein for muscle mass gain as well as the sustained release of carbohydrates that support your high-intensity workouts.`,
    "expiery": `31-Aug-2022`
}];

var Product_banner = [{ "image": "https://assets.lybrate.com/q_auto:low,f_auto,w_600//rio/800x800/product_banner_01.jpg" }, { "image": "https://assets.lybrate.com/q_auto:low,f_auto,w_600//rio/800x800/banner-COVID-19-Protection-Kit_01.jpg" },
{ "image": "https://assets.lybrate.com/q_auto:low,f_auto,w_600//rio/800x800/banner_Fitness-Supplement-Products_02.jpg" }];

var productShow4_arr = [{
    "name": "Wel Ark Preworkout (Pineapple Flavor)", "price": `2199.00 `, "actualPrice": `2900.00`, "off": ` 24%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/purenutri/prod_2021-04-28/codliver_v1.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/purenutri/prod_2021-04-28/codliver_v2.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/purenutri/prod_2021-04-28/codliver_v3.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/welark/product_2021-07-14/preworkout_pineapple_v2.png", "brand": "WEL ARK", "fullName": `Wel Ark Preworkout (Pineapple Flavor) 300g`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹199 LybrateCash for your future purchases.`,
    "details": `The top-notch fitness product for athletes, powerlifters, or cross-fitters. It contains amino acids. Wel-Ark Pre Workout helps athletes achieve peak performance while working out in the gym. It can give the perfect balance of strength, focus, fat burn, endurance, and energy.`,
    "expiery": `Expiry Date: 31-Oct-2022`
},

{
    "name": "Cod Liver Oil (Vitamin A & D3, Omega 3) ", "price": `719.00 `, "actualPrice": `999.00`, "off": ` 28% `, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/welark/product_2021-07-14/preworkout_pineapple_v1.png",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/welark/product_2021-07-14/preworkout_pineapple_v2.png",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_bcaa_ga2.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/welark/product_2021-07-14/preworkout_pineapple_v2.png", "brand": "PURE NUTRITION", "fullName": `Cod Liver Oil (Vitamin A & D3, Omega 3) 90 Softgels`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹1281 LybrateCash for your future purchases.`,
    "details": `cod liver`,
    "expiery": `Expiry Date: 30-Nov-2022`
},
{
    "name": "Livgo N95 Anti Pollution Face Mask ", "price": `599.00 `, "actualPrice": `1200.00`, "off": ` 50%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/livgo/LGPM_valve_pack_4.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/livgo/livgovalve2.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/livgo/livgovalve4.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/livgo/livgovalve5.jpg", "brand": "LIVGO", "fullName": `Livgo N95 Anti Pollution Face Mask (With valve) Pack of 4`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹1401 LybrateCash for your future purchases.`,
    "details": `Livgo N95 Anti Pollution Face Mask with 5 layer filtration provides superior respiratory protection from dangerous virus, airborne disease, particulate matter, vehicle & factory exhaust, allergens.`,
    "expiery": `Expiry Date: 30-Jan-2022`
},
{
    "name": "Good Lyfe Lakadong Turmeric ", "price": `749.00 `, "actualPrice": `900.00`, "off": ` 16%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/GoodLyfeProject/prod_2021-04-09/turmeric-pack.webp",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/GoodLyfeProject/prod_2021-04-09/turmeric-v2.webp",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/GoodLyfeProject/prod_2021-04-09/turmeric-v2.webp",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/GoodLyfeProject/prod_2021-04-09/turmeric-v3.webp", "brand": "GOOD LYFE PROJECT", "fullName": `Good Lyfe Lakadong Turmeric Superoot Powder - 200g Pack of 2`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹1251 LybrateCash for your future purchases.`,
    "details": `Lakadong Turmeric Superoot Powder is sourced directly from Lakadong, a remote village in Meghalaya, known for producing the world’s finest turmeric and one of the highest curcumin contents.`,
    "expiery": `Expiry Date: 30-May-2023`
}];

var productShow5_arr = [{
    "name": "Anti-Pollution Mask", "price": `399.00 `, "actualPrice": `651.00`, "off": ` 51%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/resizednew/resizednew/advind-mask1.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/resizednew/resizednew/advind-mask2.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/resizednew/resizednew/advind-mask3.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/resized/resizednew/resizednew/advind-mask4.jpg", "brand": "ADVIND HEALTHCARE", "fullName": `Advind Healthcare N99 Anti-Pollution Mask - Black (L-XL)`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹1661 LybrateCash for your future purchases.`,
    "details": `N99 Anti-Pollution mask protects you against air pollution. This mask also improves breathing and protects your lungs.`,
    "expiery": `Expiry Date: 30-May-2024`
},

{
    "name": "Enhance Energy,Focus & Strength", "price": `1100.00 `, "actualPrice": `2000.00`, "off": ` 45%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white//rio/800x800/Testestrone_Pack_2.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white//rio/healthvit/12/1.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white//rio/healthvit/12/2.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white//rio/healthvit/12/5.jpg", "brand": "HEALTHVIT", "fullName": `Healthvit Fitness Testosterone Booster Supplement Combo - Pack of 2 (60 Capsules x2)`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹900 LybrateCash for your future purchases.`,
    "details": `Healthvit Fitness Testosterone Booster Supplement and Boost Men Muscle Growth and Energy`,
    "expiery": `Expiry Date: 31-Aug-2022`
},
{
    "name": "Onlife Vegan Omega 3-6-9", "price": `699.00 `, "actualPrice": `1249.00`, "off": ` 44%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_omega_369.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_omega_369-1.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_omega_369-2.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/onelife/olmp_omega_369-3.jpg", "brand": "ONELIFE", "fullName": `Onelife Vegan Omega 3-6-9 (60 Softgels)`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹1301 LybrateCash for your future purchases.`,
    "details": `Onelife Omega 3-6-9 contains flax seed for superlative heart and skin health derived from a vegetarian source. The best beauty enhancer in your arsenal is now vegetarian.`,
    "expiery": `Expiry Date: 30-Oct-2022`
},
{
    "name": "Rich in antioxidants ", "price": `600.00 `, "actualPrice": `1400.00`, "off": ` 57%`, "image1": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/healtherio/gingerpac4.jpg",
    "image2": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/healtherio/ginger1.jpg",
    "image3": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/healtherio/ginger2.jpg",
    "image4": "https://assets.lybrate.com/q_auto,f_auto,w_125,h_125,c_pad,b_white/rio/healtherio/ginger2.jpg", "brand": "GOOD LYFE PROJECT", "fullName": `Good Lyfe Lakadong Turmeric Superoot Powder - 200g Pack of 2`, "special": "Special Price",
    "goldMember": "Become a Gold Member and you get this for Free using bonus LybrateCash",
    "goldmemberLine2": `Also get ₹1400 LybrateCash for your future purchases.`,
    "details": `This delicious sweet liquid maintains healthy digestion, cleanses the body and maintains skin glow. Say goodbye to cough and cold with Healtherio ginger honey.`,
    "expiery": `Expiry Date: 30-Apr-2022`
}];


//Show1
function show1() {
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
            details(product);
        };

        price.append(offer, p_price)
        div.append(p_image, p_name, price, time)
        show1.append(div)

        data_div.append(show1)


    });
}
show1();


//show2
function show2() {
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
            details(product);
        };

        price.append(p_price, a_price, offer)
        div.append(p_image, p_name, price)
        show2.append(div)


        data_div.append(show2)


    });
}
show2();

//Show the bannner

function banner() {
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
banner();


//product after Banner  column 1
function show4() {
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
            details(product);
        };

        price.append(p_price, a_price, offer)
        div.append(p_image, p_name, price)
        show4.append(div)


        data_div.append(show4)


    });
}
show4();

// column2
function show5() {
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
            details(product);
        };

        price.append(p_price, a_price, offer)
        div.append(p_image, p_name, price)
        show5.append(div)

        data_div.append(show5)


    });
}
show5();


//Go to detail page of that product

function details(product) {

    window.location.href = "cart.html";
    localStorage.setItem("myProducts", JSON.stringify(product));


}


let userDetails = JSON.parse(localStorage.getItem("details"))

let userName = document.querySelector(".top_a")

try {
    if (userDetails.length != null) {
        userName.innerText = `Hello ${userDetails[0].name} `
        userName.style.backgroundColor = "white"
        userName.style.marginTop = `-8% !important`
        userName.style.fontSize = `14.5px`
        userName.style.marginLeft = `-18%`
        userName.style.border = "none"
        userName.style.outLine = "none"
        userName.style.fontWeight = "200"

        let aero = document.createElement("span")
        aero.setAttribute("class", "fas fa-angle-down")

        userName.append(aero)

    }

} catch (error) {
    console.log("Please Login",error);
}

userName.innerText = `Hello ${userDetails[0].name} `
userName.style.backgroundColor = "white"
userName.style.marginTop = `-8% !important`
userName.style.fontSize = `14.5px`
userName.style.marginLeft = `-18%`
userName.style.border = "none"
userName.style.outLine = "none"
userName.style.fontWeight = "200"

let aero = document.createElement("span")
aero.setAttribute("class", "fas fa-angle-down")

userName.append(aero)