let express=require("express")
const { MaterialCreate, MaterialView, MaterialDelete, MaterialUpdate } = require("../../controllers/admin/materialControl")

let MaterailRoute=express.Router()

MaterailRoute.post('/create',MaterialCreate)


MaterailRoute.get('/view',MaterialView)


MaterailRoute.delete('/delete',MaterialDelete)


MaterailRoute.put('/update/:id',MaterialUpdate)


module.exports={MaterailRoute}