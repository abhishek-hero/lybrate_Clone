// function signUp() {

//     let detail_data = JSON.parse(localStorage.getItem('details'));

//     var name_input = document.getElementById('name').value;
//     var num_input = document.getElementById('num').value;
//     var password_input = document.getElementById('pass').value;
//     var mail_input = document.getElementById('mail').value;
//     if (num_input.length != 10) {
//         alert('Invalid Number Please fill in the required number')
//     }
//     else if (name_input == "" || password_input == "" || password_input.length < 8 || mail_input == "") {
//         alert('Please fill the Correct Details')
//     }
//     else {
//         const json_obj = {
//             name: name_input,
//             number: num_input,
//             pass: password_input,
//             mail: mail_input,
//         }
//         detail_data.push(json_obj);
//         localStorage.setItem('details', JSON.stringify(detail_data));
//         window.location.href = "login.html"

//     }

// }