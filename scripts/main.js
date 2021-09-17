function login(){
    window.location.href = "HTML/login.html"
}

function goodcart(){
    window.location.href = "HTML/product.html"
}


let random_number = Math.floor(Math.random()*10 + 1)

let left = 1;
let right = 4;

let prev = 1;
let next1 = 4;

let video_P = 1;
let video_N = 4;

let bottom_P = 1;
let bottom_N = 4;

function show() {

    let time = document.getElementById("time")
    setInterval(function (){
        time.innerHTML = `${random_number} min ago`
    }, 2000)

    for (let i = left; i <= right; i++) {
        document.getElementById("c" + i).style.display = "inline-block"
    }

    for (let i = prev; i <= next1; i++) {
        document.getElementById("d" + i).style.display = "inline-block"
    }

    for (let i = video_P; i <= video_N; i++) {
        document.getElementById("video" + i).style.display = "inline-block"
    }
    for (let i = bottom_P; i <= bottom_N; i++) {
        document.getElementById("bottom" + i).style.display = "inline-block"
    }
}


function next() {

    if (right <= 5) {

        document.getElementById("c" + left).style.display = "none";
        left++
        right++

        for (let i = left; i <= right; i++) {
            document.getElementById("c" + i).style.display = "inline-block"
        }

    }else {

        return;

    }

}

function previous() {

    if (left >= 2 && right >= 4) {

        document.getElementById("c" + right).style.display = "none";
        left--
        right--

        for (let i = left; i <= right; i++) {
            document.getElementById("c" + i).style.display = "inline-block"
        }

    }else {

        return;
        
    }

}


function city_next() {

    if (prev <= 3 && next1 <= 4) {

        document.getElementById("d" + prev).style.display = "none";
        prev++
        next1++

        for (let i = prev; i <= next1; i++) {
            document.getElementById("d" + i).style.display = "inline-block"
        }

    }else {

        return;

    }

}

function city_previous() {

    if (prev >= 2 && next1 >= 3) {

        document.getElementById("d" + next1).style.display = "none";
        prev--
        next1--

        for (let i = prev; i <= next1; i++) {
            document.getElementById("d" + i).style.display = "inline-block"
        }

    }else {

        return;
        
    }

}






function video_next() {

    if (video_P <= 3 && video_N <= 5) {

        document.getElementById("video" + video_P).style.display = "none";
        video_P++
        video_N++

        for (let i = video_P; i <= video_N; i++) {
            document.getElementById("video" + i).style.display = "inline-block"
        }

    }else {

        return;

    }

}

function video_previous() {

    if (video_P >= 2 && video_N >= 2) {

        document.getElementById("video" + video_N).style.display = "none";
        video_P--
        video_N--

        for (let i = video_P; i <= video_N; i++) {
            document.getElementById("video" + i).style.display = "inline-block"
        }

    }else {

        return;
        
    }

}




function bottom_next() {

    if (bottom_P <= 3 && bottom_N <= 5) {

        document.getElementById("bottom" + bottom_P).style.display = "none";
        bottom_P++
        bottom_N++

        for (let i = bottom_P; i <= bottom_N; i++) {
            document.getElementById("bottom" + i).style.display = "inline-block"
        }

    }else {

        return;

    }

}

function bottom_previous() {

    if (bottom_P >= 2 && bottom_N >= 2) {

        document.getElementById("bottom" + bottom_N).style.display = "none";
        bottom_P--
        bottom_N--

        for (let i = bottom_P; i <= bottom_N; i++) {
            document.getElementById("bottom" + i).style.display = "inline-block"
        }

    }else {

        return;
        
    }

}
