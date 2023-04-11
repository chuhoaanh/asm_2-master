import instance from ".";
import { formAdd, formUpdate } from "../models"

const getData = JSON.parse(localStorage.getItem("user") as string);


export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}

export const getOne = (id: string) => {
    return instance.get("/products/" + id)
}

export const getById = (id: string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}

export const addProduct = (product: formAdd) => {
    return instance.post(`/products`, product, {
        headers: {
            Authorization: `Bearer ${getData && getData.accessToken}`
        }
    })
}


export const update = (id: string, product: formUpdate) => {
    return instance.put(`/products/${id}`, product, {
        headers: {
            Authorization: `Bearer ${getData && getData.accessToken}`
        }
    })
}

export const deleteProduct = (id: string) => {
    return instance.delete(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${getData && getData.accessToken}`
        }
    })
}