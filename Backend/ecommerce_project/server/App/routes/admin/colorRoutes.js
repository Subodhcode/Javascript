let express=require("express")
const { colorCreate, colorView, colorDelete, colorUpdate, multiDelete } = require("../../controllers/admin/colorController")
let colorRoutes=express.Router()

colorRoutes.post('/create',colorCreate)


colorRoutes.get('/view',colorView)


colorRoutes.delete('/delete/:id',colorDelete)


colorRoutes.post('/multiDelete',multiDelete)

colorRoutes.put('/update/:id',colorUpdate)


module.exports={colorRoutes}