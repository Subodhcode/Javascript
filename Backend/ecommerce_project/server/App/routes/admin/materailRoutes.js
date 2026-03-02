let express=require("express")
let materialRoutes=express.Router()

materialRoutes.post('/create',(req,res)=>{
    res.send(
        {
            _status:true,
            _message:"color Added"
        }
    )
})


materialRoutes.get('/view',(req,res)=>{
    res.send(
        {
            _status:true,
            _message:"color found"
        }
    )
})


materialRoutes.delete('/delete',(req,res)=>{
    res.send(
        {
            _status:true,
            _message:"color Deleted"
        }
    )
})


materialRoutes.put('/updated',(req,res)=>{
    res.send(
        {
            _status:true,
            _message:"color updated"
        }
    )
})


module.exports={materialRoutes}