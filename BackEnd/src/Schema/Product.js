import joi from 'joi'
export const productSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Ten khong duoc bo trong",
        "any.required": "Truong ten bat buoc nhap"
    }),
    price: joi.number().min(1).required().messages({
        "string.empty": "price khong duoc bo trong",
        "any.required": "Truong price bat buoc nhap",
        "string.min": "price phai lon hon hoac bang 1",
    }),

    images: joi.string().required().messages({
        "string.empty": "image khong duoc bo trong",
        "any.required": "Truong image bat buoc nhap",
        "string.min": "image phai lon hon hoac bang 1",
    }),

    original_price: joi.number().min(0).required().messages({
        "string.empty": "Trường dữ liệu bắt buộc",
        "any.required": "Truong original_price bat buoc nhap",
        "string.min": "original_price phai lon hon hoac bang 1",
    }),
    description: joi.string().min(10).required().messages({
        "string.empty": "Trường dữ liệu bắt buộc",
        "any.required": "Truong description bat buoc nhap",
        "string.min": "description phai lon hon hoac bang 1",
    }),
    description_small: joi.string().min(10).required().messages({
        "string.empty": "Trường dữ liệu bắt buộc",
        "any.required": "Truong description_small bat buoc nhap",
        "string.min": "description_small phai lon hon hoac bang 1",
    }),
    specifications: joi.string().min(10).required().messages({
        "string.empty": "Trường dữ liệu bắt buộc",
        "any.required": "Truong specifications bat buoc nhap",
        "string.min": "specifications phai lon hon hoac bang 1",
    }),
    categoryId: joi.string().min(10).required().messages({
        "string.empty": "Trường dữ liệu bắt buộc",
        "any.required": "Truong categoryId bat buoc nhap",
    })
})