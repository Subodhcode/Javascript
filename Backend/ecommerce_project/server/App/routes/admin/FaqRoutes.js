let express=require("express")
const { FaqCreate, FaqView, FaqDelete, FaqUpdate } = require("../../controllers/admin/FaqController")
// const { FaqCreate, FaqView, FaqDelete, FaqUpdate } = require("../../controllers/admin/materialControl")
// const { colorCreate, colorView, colorDelete, colorUpdate } = require("../../controllers/admin/colorController")
let FaqRoutes=express.Router()

FaqRoutes.post('/create',FaqCreate)


FaqRoutes.get('/view',FaqView)


FaqRoutes.delete('/delete',FaqDelete)


FaqRoutes.put('/update/:id',FaqUpdate)


module.exports={FaqRoutes}