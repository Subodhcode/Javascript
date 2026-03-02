let colorCreate=(req,res)=>{
    res.send(
        {
            _status:true,
            _message:"color Added"
        }
    )
}

let colorView=(req,res)=>{
    res.send(
        {
            _status:true,
            _message:"color found"
        }
    )
}

let colorDelete=(req,res)=>{
     res.send(
        {
            _status:true,
            _message:"color Deleted"
        }
    )
}

let colorUpdate=(req,res)=>{
     res.send(
        {
            _status:true,
            _message:"color Update"
        }
    )
}
module.exports={colorCreate,colorView,colorDelete,colorUpdate}