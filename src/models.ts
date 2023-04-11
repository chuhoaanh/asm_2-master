
import * as Yup from 'yup'
export interface IProduct {
    id: string,
    _id: string,
    name: string,
    price: number,
    categoryId: ICategory
    original_price: number,
    description: string,
    description_small: string,
    images: string,
    brand: {
        id: number,
        name: string,
        slug: string
    },
    specifications: ISpecification[]
}

export interface ICategory {
    _id: string
    name: string
}

export interface IUser {
    accessToken: string,
    email: string,
    password: string,
    role: string,
    tel: number,
    userName: string
}
export interface ISpecification {
    name: string,
    attributes: { code: string, name: string, value: string }[]
}

// signup
export const signupSchema = Yup.object({
    userName: Yup.string().required("Trường userName bắt buộc phải nhập"),
    email: Yup.string().email("email không đúng định dạng").required("Trường email bắt buộc phải nhập"),
    tel: Yup.number().required("Trường tel bắt buộc phải nhập"),
    password: Yup.string().min(6).required("Trường password bắt buộc phải nhập"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu không chính xác"),
    role: Yup.string().default("member")
})
export type formSignup = Yup.InferType<typeof signupSchema>
// signin
export const signinSchema = Yup.object({
    email: Yup.string().email("email không đúng định dạng").required("Trường email bắt buộc phải nhập"),
    password: Yup.string().min(6).required("Trường password bắt buộc phải nhập"),
})
export type formSigin = Yup.InferType<typeof signinSchema>


// updateProduct
export const addProductSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    images: Yup.string().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    categoryId: Yup.string().required("Trường dữ liệu bắt buộc"),
    description: Yup.string(),
    description_small: Yup.string().min(10, "Mô tả ngắn phải có 10 kí tự").max(200).required(),
    specifications: Yup.string().min(10, "Thông số kĩ thuật phải có 10 kí tự").max(200).required()
})
export type formAdd = Yup.InferType<typeof addProductSchema>

export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    categoryId: Yup.string().required("Trường dữ liệu bắt buộc"),
    description: Yup.string(),
    description_small: Yup.string().min(10, "Mô tả ngắn phải có 10 kí tự").max(200).required(),
    specifications: Yup.string().min(10, "Thông số kĩ thuật phải có 10 kí tự").max(200).required()
})

export type formUpdate = Yup.InferType<typeof updateSchema>

export const addCategorySchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
})

