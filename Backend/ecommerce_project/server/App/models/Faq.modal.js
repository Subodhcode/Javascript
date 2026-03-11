let mongoose = require("mongoose")
let FaqSchema = mongoose.Schema(
    {
        FaqName: {
            type: String,
            required: [true, 'material name is required'],
            minLength: 2,
            maxLength: 15,
            match: [/^[A-Za-z ]{2,10}$/, "Name should contain only letters"],
            unique: true
        },
     
        FaqOrder: Number,
        FaqStatus: {
            type: Boolean,
            default: true
        }

    }
)

let FaqModal = mongoose.model("Faq", FaqSchema)
module.exports = { FaqModal }