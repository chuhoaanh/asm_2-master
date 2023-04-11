import { useEffect, useState } from "react"
import { ICategory, IProduct, IUser, addCategorySchema, addProductSchema, formAdd, updateSchema } from "../models"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { addProduct } from "../api/product"
import { useNavigate, useParams } from "react-router-dom"
import { addCategory, getCategory, getOneCategory, updateCategory } from "../api/Category"
import axios from "axios"

const CategoryEdit = () => {
    const [category, setCategory] = useState<ICategory>({} as ICategory)
    const { id } = useParams()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ICategory>({
        resolver: yupResolver(addCategorySchema),
        defaultValues: async () => {
            if (id) {
                return await fetchOneCategory(id)
            }
        }
    })
    const onSubmitForm = async (category: ICategory) => {

        try {
            if (id) {
                await updateCategory(id, category)
                navigate("/admin/category")
            }
        } catch (error) {
            console.log(error);
        }
        navigate("/admin/category")

    }
    const fetchOneCategory = async (id: string) => {
        if (id) {
            const { data: { category } } = await getOneCategory(id)
            setCategory(category)
            return category
        }
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

export default CategoryEdit