let mongoose = require("mongoose")
let colorSchema = mongoose.Schema(
    {
        colorName: {
            type: String,
            required: [true, 'color name is required'],
            minLength: [2, 'Color name must be at least 2 character long'],
            maxLength: [20, 'Color name cannot exceed 20 character'],
            match: [/^[A-Za-z ]{2,10}$/, "Name should contain only letters"],//regix
            unique: true
        },
        colorCode: {
            type: String,
            required: [true, 'color code is required'],
            minLength: [2, 'Color code must be at least 2 character long'],
            maxLength: [20, 'Color code cannot exceed 20 character'],
            unique: true
        },

          colorOrder: Number,

        isDeleted:{
            type:Boolean,
            default:false
        },
        DeletedAt:{
            type:Date,
            default:null
        },
      
        colorStatus: {
            type: Boolean,
            default: true
        }

    }
)

let colorModal = mongoose.model("color", colorSchema)
module.exports = { colorModal }