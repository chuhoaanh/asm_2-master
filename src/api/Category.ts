import instence from "."

import { ICategory } from "../models"
export const getCategory = () => {
    return instence.get("/category")
}
export const getOneCategory = (id: string) => {
    return instence.get(`/category/${id}`)
}

export const addCategory = (category: ICategory) => {
    return instence.post(`/category`, category)
}
export const updateCategory = (id: string, category: ICategory) => {
    return instence.put(`/category/${id}`, category)
}
export const deleteCategory = (id: string) => {
    return instence.delete(`/category/${id}`)
}

