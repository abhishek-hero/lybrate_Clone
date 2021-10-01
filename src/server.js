const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const connect = () => {
    return mongoose.connect("mongodb+srv://abhishek-hero:mahabharat@cluster0.z8hnh.mongodb.net/lybrate_cloneDB", { useNewUrlParser: true }, { useUnifiedApology: true })
}

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.use(express.static("public"))


const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, reuired: true },
    mobileNo: { type: Number, required: true },
    password: { type: String, required: true },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "#", required: false }]
}, {
    versionKey: false
})


const User = mongoose.model("user", userSchema)

app.get("/signup", async (req, res) => {
    // res.sendFile(__dirname + "../HTML/signUp.ejs")
    res.render("signUp.ejs")
})


app.get("/login", async (req, res) => {
    // res.sendFile()
    res.render("login.ejs")
})

app.get("/home", async (req, res) => {
    res.render("index.ejs")
})

app.get("/products", async (req, res) => {
    res.render("product.ejs")
})



app.post("", async (req, res) => {
    let newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        password: req.body.password
    });

    newUser.save();
    res.redirect("/login")

})



let logged_user;

app.post("/login", async (req, res) => {
    // Insert Login Code Here
    let mobileNo = req.body.mobileNo;
    let password = req.body.password;


    logged_user = await User.find({ mobileNo: mobileNo, password: password })

    if (logged_user.length == 0) {

        // alert("Invalid Credentials")
        res.redirect("/login")

    } else {

        res.redirect("/home")
        // res.send(`Username: ${mobileNo} Password: ${password}`);
        // console.log(mobileNo, password)
    }

});




app.listen(3000, async (req, res) => {
    await connect()
    console.log("Listening to post 3000")
})



// // app.get("/users/:id/:password", async (req, res) => {
// //     const user = await User.find({$and: [{mobileNo: req.params.id}, {password: req.params.password}]}).lean().exec()
// //     res.send({user})

// // })

