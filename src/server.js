const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const connect = () => {
    return mongoose.connect("mongodb+srv://abhishek-hero:mahabharat@cluster0.z8hnh.mongodb.net/lybrate_cloneDB", { useNewUrlParser: true }, { useUnifiedApology: true })
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

app.use(express.static("public"))

//----------------------------signup--------------------------///
const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, reuired: true },
    mobileNo: { type: Number, required: true },
    password: { type: String, required: true },
    cart: [{type: mongoose.Schema.Types.ObjectId, ref: "#", required: false}],
    checkout:[{type:mongoose.Schema.Types.ObjectId,ref:"",required:false}]
}, {
    versionKey: false
})


const User = mongoose.model("user", userSchema)

app.get("/signup", async (req, res) => {
    // res.sendFile(__dirname + "../HTML/signUp.ejs")
    res.render("signUp.ejs")
})



app.get("/home", async (req, res) => {
    res.render("index.ejs")
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


//------------------------------login----------------------//


app.get("/login",async(req,res)=>{
    const ans = await User.find().lean().exec()
    
      // console.log(ans);
         res.render("login.ejs",{
             ans
         })
         

})

let logged_user;

app.post("/login", async (req, res) => {
    // Insert Login Code Here
    let mobileNo = req.body.mobileNo;
    let password = req.body.password;


    logged_user = await User.find({ mobileNo: mobileNo, password: password })

    if (logged_user.length == 0) {

        // alert("Invalid Credentials")
      // res.send(logged_user)
        res.redirect("/login")

    } else {

        res.redirect("/home")
        // res.send(`Username: ${mobileNo} Password: ${password}`);
        // console.log(mobileNo, password)
    }

});







//-----------------------products---------------------------------------//



const product1Schema = mongoose.Schema({
    name:{type:String,required:false},
    membership:{type:String,required:false}
},{
    versionKey: false,
    timestamps: true
})

const Product1 = mongoose.model("productarr1", product1Schema);

const product2Schema = new mongoose.Schema({
    name:{type:String,required:false},
    membership:{type:String,required:false}
},{
    versionKey: false,
    timestamps: true
})

const Product2 = mongoose.model("productarr2", product2Schema);

const bannerSchema = new mongoose.Schema({
    name:{type:String,required:false},
    membership:{type:String,required:false}
},{
    versionKey: false,
    timestamps: true
})

const Banner = mongoose.model("productBanner", bannerSchema);


const product4Schema= new mongoose.Schema({

    name:{type:String,required:false},
},{
    versionKey: false,
    timestamps: true
})

const Product4 = mongoose.model("productarr4", product4Schema);

const product5Schema= new mongoose.Schema({

    name:{type:String,required:false},
    membership:{type:String,required:false}
},{
    versionKey: false,
    timestamps: true
})

const Product5 = mongoose.model("productarr5", product5Schema);

app.get('/getproduct',async(req,res)=>{
   const user = await User.find().lean().exec()
   
  res.send(user)

})



 app.get("/products", async (req, res) => {
     const productarr1 = await Product1.find({}).lean().exec()
     const productarr2=await Product2.find({}).lean().exec()
     const banner=await Banner.find().lean({}).exec()
     const productarr4=await Product4.find({}).lean().exec()
     const productarr5=await Product5.find({}).lean().exec()
         
//   console.log(productarr5);
   res.render('product.ejs',{productarr1,productarr2,productarr4,banner,productarr5})

}) 

const allProductSchema= new mongoose.Schema({

    name:{type:String,required:false},
    membership:{type:String,required:false}
},{
    versionKey: false,
    timestamps: true
})

const AllProduct = mongoose.model("all_product_datas", allProductSchema);

app.get("/products/:id",async(req,res)=>{
   const product1=await Product1.findById(req.params.id)
   const banner = await Banner.findById(req.params.id)
   const product2=await Product2.findById(req.params.id)
   const product4=await Product4.findById(req.params.id)
   const product5=await Product5.findById(req.params.id)

   if(product1 !=null)
   {
    //    res.render()
    //    console.log(product1);
     const product=product1
    res.render('cart.ejs',{product})
   }
   if(banner !=null)
   {
    //    res.render()
    //    console.log(product1);
     const product=banner
    res.render('cart.ejs',{product})
   }
   if(product2 !=null)
   {
    //    console.log(product2);
    const product=product2
      res.render('cart.ejs',{product})
   }
    if(product4 !=null)
   {
    //    console.log(product4);
    const product=product4
      res.render('cart.ejs',{product})
   }
    if(product5 !=null)
   {
    //    console.log(product5);
      const product=product5
       res.render('cart.ejs',{product})
   }

//    const product=await AllProduct.find({"id":req.params.id})
//    console.log(product);
//    return

})

//-------------------buycheckout page-------------///

app.get("/products/checkout/:id",async(req,res)=>{
    
    const product1=await Product1.findById(req.params.id)
    const product2=await Product2.findById(req.params.id)
    const product4=await Product4.findById(req.params.id)
    const product5=await Product5.findById(req.params.id)
 
    if(product1 !=null)
    {
     //    res.render()
     //    console.log(product1);
      const product=product1
     res.render('buyCheckOut.ejs',{product})
    }
    if(product2 !=null)
    {
     //    console.log(product2);
     const product=product2
       res.render('buyCheckOut.ejs',{product})
    }
     if(product4 !=null)
    {
     //    console.log(product4);
     const product=product4
       res.render('buyCheckOut.ejs',{product})
    }
     if(product5 !=null)
    {
     //    console.log(product5);
       const product=product5
        res.render('buyCheckOut.ejs',{product})
        
    }
 
})

const cartSchema = mongoose.Schema({
    product_id:{type:Object,required:true}
},{
    versionKey:false
})

const cart = mongoose.model('cart',cartSchema)






app.listen(3000, async (req, res) => {
    await connect()
    console.log("Listening to post 3000")
})





