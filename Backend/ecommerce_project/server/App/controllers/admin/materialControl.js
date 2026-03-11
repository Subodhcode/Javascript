

const { MaterialModal } = require("../../models/material.modal")

let MaterialCreate= async (req,res)=>{
     console.log(req.body)
    // ;re.body or modal ki field barabr hai tho sahi hai,agar dono barabar nhi hai tho khud ka object banakar dena padega


    let {MaterialName,MaterialStatus,MaterialCode}=req.body

    let insertObj={
        MaterialName,
        MaterialStatus,
        MaterialCode
    }

    try{
    let materail=await MaterialModal(insertObj)
    let MaterialRes=await materail.save()
    // let colorRes=await colorModal.insetOne(insertObj)
    res.send(
        {
            _status:true,
            _message:"materail Added",
            MaterialRes
        }
    )
    }
    catch(err){
        console.log(err);//11000 unique:true
          res.send(
        {
            _status:false,
            _message:"error found",
            err
        }
    )
    }
  
}

let MaterialView=async(req,res)=>{

    let FaqData=await FaqModal.find()
    res.send(
        {
            _status:true,
            _message:"faq found",
            FaqData
        }
    )
}

let MaterialDelete=(req,res)=>{
     res.send(
        {
            _status:true,
            _message:"faq Deleted"
        }
    )
}

let MaterialUpdate=(req,res)=>{
     res.send(
        {
            _status:true,
            _message:"faq Update"
        }
    )
}
module.exports={MaterialCreate,MaterialDelete,MaterialUpdate,MaterialView}