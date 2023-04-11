import { productSchema } from "../Schema/Product"
import Category from "../models/Category";
import Product from "../models/Products"
export const create = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body, { abortEarly: true });
        if (error) {
            return res.status(400).json({
                messages: error.details.map(err => err.message)
            })
        }
        const product = await Product.create(req.body);
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id
            }
        })
        return res.status(201).json({
            message: "Tao san pham thanh cong",
            product
        })
    } catch (error) {
        return res.status(201).json({
            error
        })
    }
}
export const getAll = async (req, res) => {
    try {
        const product = await Product.find().populate("categoryId");
        if (product == 0) {
            return res.status(400).json({
                message: "Khong co san pham nao"
            })
        }
        return res.status(201).json(product)
    } catch (error) {
        return res.status(400).json({
            message: "Khong co san pham nao"
        })
    }
}
export const getOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("categoryId");
        if (!product) {
            return res.status(400).json({
                message: "Khong co san pham nao"
            })
        }
        return res.status(201).json({
            message: "found product",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: "Khong co san pham nao"
        })
    }
}
export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(400).json({
                message: "Khong co san pham nao"
            })
        }
        return res.status(201).json({
            message: "update success product",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: "Khong co san pham nao"
        })
    }
}
export const remove = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            message: "remove success product",
        })
    } catch (error) {
        return res.status(400).json({
            message: "Khong co san pham nao"
        })
    }
}