const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const connect = () => {
    return mongoose.connect("mongodb+srv://abhishek-hero:mahabharat@cluster0.z8hnh.mongodb.net/lybrate_cloneDB")
}

//, { useNewUrlParser: true }, { useUnifiedApology: true }

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

app.set('view engine', 'ejs')

app.use(express.static("public"))


const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, reuired: true },
    mobileNo: { type: Number, required: true },
    password: { type: String, required: true },
    cart: [{ type: Object, required: false }]
}, {
    versionKey: false
})


const User = mongoose.model("user", userSchema)

app.get("/signup", async (req, res) => {
    // res.sendFile(__dirname + "../HTML/signUp.ejs")
    res.render("signUp.ejs")
})


app.get("/login", async (req, res) => {
    res.render("login.ejs")
})

app.get("/home", async (req, res) => {
    res.render("index.ejs")
})

// app.get("/products", async (req, res) => {
//     res.render("product.ejs")
// })



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

//=========================
//login section

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

        // console.log(logged_user);
        res.redirect("/home")
        // res.send(`Username: ${mobileNo} Password: ${password}`);
        // console.log(mobileNo, password)
    }

});


//=========================================================

const product1Schema = mongoose.Schema({
    name: { type: String, required: false },
    membership: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true
})

const Product1 = mongoose.model("productarr1", product1Schema);

const product2Schema = new mongoose.Schema({
    name: { type: String, required: false },
    membership: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true
})

const Product2 = mongoose.model("productarr2", product2Schema);

const bannerSchema = new mongoose.Schema({
    name: { type: String, required: false },
    membership: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true
})

const Banner = mongoose.model("productBanner", bannerSchema);


const product4Schema = new mongoose.Schema({

    name: { type: String, required: false },
}, {
    versionKey: false,
    timestamps: true
})

const Product4 = mongoose.model("productarr4", product4Schema);

const product5Schema = new mongoose.Schema({

    name: { type: String, required: false },
    membership: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true
})

const Product5 = mongoose.model("productarr5", product5Schema);



app.get("/products", async (req, res) => {
    const productarr1 = await Product1.find()
    const productarr2 = await Product2.find()
    const banner = await Banner.find()
    const productarr4 = await Product4.find()
    const productarr5 = await Product5.find()
    res.render('product.ejs', { productarr1, productarr2, productarr4, banner, productarr5 })

})

const allProductSchema = new mongoose.Schema({

    name: { type: String, required: false },
    membership: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true
})

const AllProduct = mongoose.model("all_product_datas", allProductSchema);


app.get("/products/:id", async (req, res) => {
    const product1 = await Product1.findById(req.params.id)
    const product2 = await Product2.findById(req.params.id)
    const product4 = await Product4.findById(req.params.id)
    const product5 = await Product5.findById(req.params.id)


    if (product1 != null) {
        const product = product1
        res.render('cart.ejs', { product })
    }
    if (product2 != null) {
        const product = product2
        res.render('cart.ejs', { product })
    }
    if (product4 != null) {
        const product = product4
        res.render('cart.ejs', { product })
    }
    if (product5 != null) {
        const product = product5
        res.render('cart.ejs', { product })
    }
})


//cart Schema
// const CartSchema = new mongoose.Schema(
//     {
//       userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "user"
//       },
//       cart_Items: [{ type: Object, required: true }]
//     },
//     {versionKey:false, timestamps: true }
//   );

//   const Cart=mongoose.model("cart",CartSchema)

//user specific cart===================================================
app.post("/products/cart/:id", async (req, res) => {
    const product1 = await Product1.findById(req.params.id)
    const product2 = await Product2.findById(req.params.id)
    const product4 = await Product4.findById(req.params.id)
    const product5 = await Product5.findById(req.params.id)

    if (logged_user === undefined) {
        res.redirect("/login")
    }
    else {
        if (product1 != null) {
            const product = product1
            let user = await User.findByIdAndUpdate(logged_user[0]._id,
                { $push: { cart: product } },
                { new: true }
            )
            let cart_Items = user.cart
            res.render('cart_page.ejs', { cart_Items })
        }
        if (product2 != null) {
            const product = product2
            let user = await User.findByIdAndUpdate(logged_user[0]._id,
                { $push: { cart: product } },
                { new: true }
            )
            let cart_Items = user.cart
            res.render('cart_page.ejs', { cart_Items })

        }
        if (product4 != null) {
            const product = product4
            let user = await User.findByIdAndUpdate(logged_user[0]._id,
                { $push: { cart: product } },
                { new: true }
            )
            let cart_Items = user.cart
            res.render('cart_page.ejs', { cart_Items })

        }
        if (product5 != null) {
            const product = product5
            let user = await User.findByIdAndUpdate(logged_user[0]._id,
                { $push: { cart: product } },
                { new: true }
            )
             let cart_Items =user.cart
             res.render('cart_page.ejs', { cart_Items })
            // res.send(user.cart)

        }
    }
})


// app.get("/products/checkout/:id", async (req, res) => {
//     const product1 = await Product1.findById(req.params.id)
//     const product2 = await Product2.findById(req.params.id)
//     const product4 = await Product4.findById(req.params.id)
//     const product5 = await Product5.findById(req.params.id)

    //user find krna h ====



//     if (logged_user === undefined) {
//         res.redirect("/login")
//     }
//     else {
//         if (product1 != null) {
//             const product = product1
//             logged_user[0].cart.push(product);
//             res.send(logged_user)
//             //   console.log(logged_user);
//         }
//         if (product2 != null) {
//             const product = product2
//             logged_user[0].cart.push(product);
//             res.send(logged_user)
//         }
//         if (product4 != null) {
//             const product = product4
//             logged_user[0].cart.push(product);
//             res.send(logged_user)
//         }
//         if (product5 != null) {
//             const product = product5
//             logged_user[0].cart.push(product);
//             res.send(logged_user)
//         }

//     }
// })



//===================================================================
app.listen(3000, async (req, res) => {
    await connect()
    console.log("Listening to post 3000")
})



// // app.get("/users/:id/:password", async (req, res) => {
// //     const user = await User.find({$and: [{mobileNo: req.params.id}, {password: req.params.password}]}).lean().exec()
// //     res.send({user})

// // })

