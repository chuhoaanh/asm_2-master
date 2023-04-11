import Category from "../models/Category"
export const create = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.status(201).json({
            message: "Tao category thanh cong",
            category
        })
    } catch (error) {
        return res.status(201).json({
            error
        })
    }
}
export const getAll = async (req, res) => {
    try {
        const category = await Category.find();
        if (category == 0) {
            return res.status(400).json({
                message: "Khong co category nao"
            })
        }
        return res.status(201).json(category)
    } catch (error) {
        return res.status(400).json({
            message: "Khong co category nao"
        })
    }
}
export const getOne = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate("products");
        if (!category) {
            return res.status(400).json({
                message: "Khong co category nao"
            })
        }
        return res.status(201).json({
            message: "found category",
            category
        })
    } catch (error) {
        return res.status(400).json({
            message: "Khong co category nao"
        })
    }
}
export const update = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(400).json({
                message: "Khong co category nao"
            })
        }
        return res.status(201).json({
            message: "update success category",
            category
        })
    } catch (error) {
        return res.status(400).json({
            message: "Khong co san pham nao"
        })
    }
}
export const remove = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            message: "remove success category",
        })
    } catch (error) {
        return res.status(400).json({
            message: "Khong co category nao"
        })
    }
}