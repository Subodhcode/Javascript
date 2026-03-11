const { colorModal } = require("../../models/color.modal")

/*let colorCreate = async (req, res) => {
    // console.log(req.body);re.body or modal ki field barabr hai tho sahi hai,agar dono barabar nhi hai tho khud ka object banakar dena padega


    let { colorName, colorStatus, colorCode } = req.body

    let insertObj = {
        colorName,
        colorStatus,
        colorCode
    }

     try {
        let color = await colorModal(insertObj)
        let colorRes = await color.save()
        // let colorRes=await colorModal.insetOne(insertObj)
        res.send(
            {
                _status: true,
                _message: "color Added",
                colorRes
            }
        )
    }
    catch (err) {
        console.log(err);//11000 unique:true
        res.send(
            {
                _status: false,
                _message: "error found",
                err
            }
        )
    }

}*/
let colorCreate = async (req, res) => {

    try {

        let colorRes = await colorModal.create(req.body)

        res.send({
            _status: true,
            _message: "color Added",
            colorRes
        })

    } catch (err) {
        //MongoServerError //unique
        //console.log(err)
        //console.log(err.errors) object me dega
        let error={

        }

         if(err.code=="11000"){
            //unique
            error['colorName']="color name already exist"
        }
      
        for(let key in err.errors){//object me kaam karega for in loop
            error[key]=err.errors[key].message
            console.log(key, err.errors[key].message);
        }

        res.send({
            _status: false,
            _message: "error found",
            error
        })

    }

}







let colorView = async (req, res) => {

    let filterColor={
        DeletedAt:null
    }
    let colorData = await colorModal.find(filterColor)
    res.send(
        {
            _status: true,
            _message: "color found",
            colorData
        }
    )
}

let colorDelete =async (req, res) => {
    //soft Delete | Update
    let {id}=req.params
    // console.log(id)
    let softDelRes=await colorModal.updateOne(
        {_id:id},
        {
            $set:{//update in set case
                isDeleted:true,
                DeletedAt:Date.now()
            }
        }
    )
    res.send(
        {
            _status: true,
            _message: "color Deleted",
            softDelRes
        }
    )
}

let colorUpdate =async (req, res) => {
    let {id}=req.body
    let updateObj={
        colorName,
        colorCode,
        colorOrder
    }
    let updateRes=await colorModal.updateone(
        {id:id},// array haii
        {
            $set:updateObj
        }
    )

    res.send(
        {
            _status: true,
            _message: "color Update",
            updateRes,
        }
    )
}

let multiDelete=async(req,res)=>{
    let {ids}=req.body//array hi hoga
    // console.log(ids);
      let softDelRes=await colorModal.updateMany(
        {_id:ids},// array haii
        {
            $set:{//update in set case
                isDeleted:true,
                DeletedAt:Date.now()
            }
        }
    )
    res.send(
        {
            _status: true,
            _message: "color Deleted",
            softDelRes
        }
    )
    res.send("Hello")
}
module.exports = { colorCreate, colorView, colorDelete, colorUpdate ,multiDelete,colorUpdate}