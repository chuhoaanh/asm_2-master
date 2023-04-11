import { useEffect, useState } from "react"
import { ICategory, IProduct, IUser, addCategorySchema, addProductSchema, formAdd, updateSchema } from "../models"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { addProduct } from "../api/product"
import { useNavigate } from "react-router-dom"
import { addCategory, getCategory } from "../api/Category"
import axios from "axios"
const CategoryAdd = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ICategory>({
        resolver: yupResolver(addCategorySchema)
    })
    const onSubmitForm = async (category: ICategory) => {
        await addCategory(category);
        navigate("/admin/category")

    }
    useEffect(() => {
    }, [])
    return <form onSubmit={handleSubmit(onSubmitForm)} className="grow p-5  flex">
        <div className="w-[60%]">

            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="rounded-lg bg-transparent p-8 shadow-md lg:col-span-3 lg:p-12 w-[650px]">
                    <h1 className="text-2xl text-[#5F5E61] font-semibold mb-8">ADD Category</h1>
                    <div className="space-y-4">
                        <div>
                            <label className="block font-semibold" htmlFor="email">
                                Name:
                            </label>
                            <input
                                {...register("name", { required: true })}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0061d7]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                {errors.name && errors.name.message}
                            </span>
                        </div>
                        <div className="mt-4">
                            <button
                                className="inline-block w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    </form >
}

export default CategoryAdd