const { FaqModal } = require("../../models/Faq.modal")

let FaqCreate = async (req, res) => {
    // console.log(req.body);re.body or modal ki field barabr hai tho sahi hai,agar dono barabar nhi hai tho khud ka object banakar dena padega


    let { FaqName, FaqStatus, FaqCode } = req.body

    let insertObj = {
        FaqName,
        FaqStatus,
        FaqCode
    }

    try {
        let Faq = new FaqModal (insertObj)
        let FaqRes = await Faq.save()
        // let colorRes=await colorModal.insetOne(insertObj)
        res.send(
            {
                _status: true,
                _message: "Faq Added",
                FaqRes
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

}

let FaqView = async (req, res) => {

    let FaqData = await FaqModal.find()
    res.send(
        {
            _status: true,
            _message: "Faq found",
            FaqData
        }
    )
}

let FaqDelete = (req, res) => {
    res.send(
        {
            _status: true,
            _message: "Faq Deleted"
        }
    )
}

let FaqUpdate = (req, res) => {
    res.send(
        {
            _status: true,
            _message: "color Update"
        }
    )
}
module.exports = { FaqCreate, FaqView, FaqDelete, FaqUpdate }