const express=require("express");
const { colorRoutes } = require("./colorRoutes");
const {  MaterailRoute } = require("./materailRoutes");
const { FaqRoutes } = require("./FaqRoutes");
let adminRoutes=express.Router()

adminRoutes.use("/color",colorRoutes)
adminRoutes.use("/materail",MaterailRoute)
adminRoutes.use("/faq",FaqRoutes)
//http://localhost:8000/admin/color
//http://localhost:8000/admin/login
// adminRoutes.post("/login",(req,res)=>{
//     res.send(
//         {
//             _status:true,
//             _message:"Login Done"
//         }
//     )
// })

// adminRoutes.post("/register",(req,res)=>{
//     res.send(
//         {
//             _status:true,
//             _message:"Register Done"
//         }
//     )
// })

module.exports={adminRoutes}