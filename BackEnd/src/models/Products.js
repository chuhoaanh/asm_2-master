import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    original_price: {
        type: Number,
        required: true
    },
    description_small: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    specifications: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
})

export default mongoose.model('Product', productSchema)