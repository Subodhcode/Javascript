// express module ko import kiya
let express = require("express")

// express ko initialize kiya → app me pura server aa gaya
let app = express()

// middleware → incoming JSON ko parse karega → data req.body me milega
app.use(express.json())

// ====================== GET ALL PRODUCTS ======================
// URL: http://localhost:8000/product?name=abc
app.get("/product", (req, res) => {

    console.log(req.query); 
    // query params read karne ke liye → /product?name=mobile

    let obj = {
        _status: true,            // custom flag (API success/fail)
        _message: "Product found",
        _data: [                  // multiple products ka array
            {
                title: "Product1",
                price: 200
            },
            {
                title: "Product2",
                price: 200
            }
        ]
    }

    res.send(obj)  // client ko response diya
})


// ====================== GET SINGLE PRODUCT (DYNAMIC ID) ======================
// URL: http://localhost:8000/product/10
app.get("/product/:id", (req, res) => {

    let { id } = req.params;   // dynamic route param read
    console.log(id)

    let obj = {
        _status: true,
        _message: "Single Product found",
        _data: '',             // yaha single product aayega (future DB se)
        id                     // jo id URL me aayi
    }

    res.send(obj)
})


// ====================== GET NEWS ======================
app.get("/news", (req, res) => {

    let obj = {
        _status: true,
        _message: "news found",
        _data: [
            {
                title: "aajtak",
                price: 200
            },
            {
                title: "zee news",
                price: 200
            }
        ]
    }

    res.send(obj)
})


// ====================== POST LOGIN ======================
// Browser se direct test nahi hota → Postman use karo
// Ye data backend me bhejne ke liye hota hai
app.post('/login', (req, res) => {

    // req.body → JSON data (middleware ki wajah se mila)
    let { userName, password } = req.body

    let obj = {
        _status: true,
        _message: "Login Done",
        userName,      // jo client ne bheja
        password
    }

    res.send(obj)
})


// ====================== DELETE USER ======================
// URL: http://localhost:8000/user/delete/5
app.delete('/user/delete/:id', (req, res) => {

    let { id } = req.params;   // delete karne ke liye id

    let obj = {
        _status: true,
        _message: "Delete Done",
    }

    res.send(obj);
})


// ====================== SERVER LISTEN ======================
// server port 8000 par run hoga
app.listen("8000")