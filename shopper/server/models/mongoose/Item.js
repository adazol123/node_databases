const { model, Schema } = require('mongoose')

const ItemSchema = new Schema({
    sku: { type: Number, required: true, index: { unique: true } },
    name: { type: String, required: true },
    price: { type: Number, required: true },

}, {
    timestamps: true,

})


module.exports = model('items', ItemSchema)