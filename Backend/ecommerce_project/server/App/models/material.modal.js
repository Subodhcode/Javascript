let mongoose = require("mongoose")
let MaterialSchema = mongoose.Schema(
    {
        MaterialName: {
            type: String,
            required: [true, 'material name is required'],
            minLength: 2,
            maxLength: 15,
            match: [/^[A-Za-z ]{2,10}$/, "Name should contain only letters"],
            unique:true
        },
     
        colorOrder: Number,
        colorStatus: {
            type: Boolean,
            default: true
        }

    }
)

let MaterialModal = mongoose.model("material", MaterialSchema)
module.exports = { MaterialModal }