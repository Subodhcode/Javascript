let express=require("express")
// express import → server & routing ke liye use hota hai

const { checkToken } = require("./App/middlewear/chekcToken")
// custom middleware import → mostly auth / validation ke liye use karte hai

let app=express()
// express app create → isko hi server bolte hai

app.use(express.json())//middlewear
// built-in middleware → incoming JSON ko req.body me convert karta hai
// POST & PUT API ke liye mandatory


//app level calling ,route level callng middlewear

// app.use(checkToken)//middlewear function,aap level routing

// agar isko enable kar diya → sabhi routes protected ho jayenge
// flow → request → checkToken → next() → route
// real use → jab pura project secure karna ho



app.post('/login',(req,res)=>{
// ye public route hai → yaha middleware nahi lagaya → login open hai

    let obj={
        _status:true,
        _message:"Login Done"
    }

    res.send(obj)
// response send → request-response cycle end
})



app.get('/product',checkToken,(req,res)=>{//route level middlewear
// checkToken pehle chalega
// agar token valid → next() → ye route chalega
// agar middleware se response gaya → ye route nahi chalega
// isko bolte hai protected route 🔐

    let obj={
        _status:true,
        _message:"Product Found"
    }

    res.send(obj)
})



app.get('/news',(req,res)=>{
// normal route → direct access → koi checking nahi

    let obj={
        _status:true,
        _message:"news Found"
    }

    res.send(obj)
})



app.listen("8000")
// server start on port 8000
// browser → localhost:8000