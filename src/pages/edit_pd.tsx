import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ICategory, IProduct, addProductSchema, formAdd, formUpdate, updateSchema } from "../models"
import { getAll, getOne, update } from "../api/product"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { getCategory } from "../api/Category"
import { date } from "yup"
// import * as Yup from 'yup'
const AdminUpdate = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const [category, setCategory] = useState<ICategory[]>([])
    const { id } = useParams()
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formUpdate>({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => {
            if (id) {
                return await fetchOneAdmin(id)
            }
        }
    })

    const onSubmitForm = async (data: formUpdate) => {
        try {
            if (id) {
                await update(id, data)
                navigate("/admin")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchOneAdmin = async (id: string) => {
        if (id) {
            const { data: { product } } = await getOne(id)
            setProduct(product)
            return product
        }
    }
    const fetchAllCategory = async () => {
        const { data } = await getCategory()
        setCategory(data)
    }
    useEffect(() => {
        fetchAllCategory()
        if (id) {
            fetchOneAdmin(id)
        }
    }, [])
    return <form onSubmit={handleSubmit(onSubmitForm)} className="grow p-5 bg-[#F1F3F4] flex">
        <div className="w-[40%]">
            <h1 className="text-2xl text-[#5F5E61] font-bold">Cập nhật sản phẩm</h1>
            <div
                className="group flex flex-col justify-between rounded-lg bg-transparent p-4 shadow-md transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-[400px] mt-10 min-h-[350px]"
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-[#5F5E61] font-semibold text-center">Image</h1>
                    <img src={product.images} className="w-[250px] object-cover my-3" alt="" />
                    <input type="file" name="" id="" />
                    {/* <input type="file" {...register("images")} /> */}

                </div>
                <div className="mt-4 border-t-2 border-gray-300 pt-4">
                    <textarea
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0088d7]"

                        cols={30}
                        rows={4}
                        {...register("description_small", { required: true })}
                    ></textarea>
                    <p className="text-red-600">
                        {errors.description_small && errors.description_small.message}
                    </p>
                </div>
            </div>
        </div>
        <div className="w-[60%]">
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-transparent p-8 shadow-md lg:col-span-3 lg:p-12 w-[650px]">
                            <h1 className="text-2xl text-[#5F5E61] font-semibold mb-8">Thông tin sản phẩm</h1>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[14px] block font-semibold">Tên sản phẩm</label>
                                    <input
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0088d7]"

                                        {...register("name", { required: true })}
                                    />
                                    <p className="text-red-600">
                                        {errors.name && errors.name.message}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-[14px] block font-semibold">Giá gốc</label>
                                        <input
                                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0088d7]"

                                            type="number"
                                            {...register("original_price", { required: true })}
                                        />
                                        <p className="text-red-600">
                                            {errors.original_price && errors.original_price.message}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="text-[14px] block font-semibold">Giá khuyễn mãi</label>
                                        <input
                                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0088d7]"

                                            {...register("price", { required: true })}
                                            type="number"
                                        />
                                        <p className="text-red-600">
                                            {errors.price && errors.price.message}
                                        </p>
                                    </div>
                                </div>
                                <label className="text-[14px] block font-semibold">Danh mục</label>
                                <select className="w-full px-4 py-2  border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0088d7]"
                                    {...register("categoryId")}
                                    value={product?.categoryId?._id}
                                >
                                    {category && category.map((cate, index) =>
                                        <option key={cate._id} value={cate?._id}>
                                            {cate.name}
                                        </option>
                                    )}
                                </select>
                                <p className="text-red-600">
                                    {errors.categoryId && errors.categoryId.message}
                                </p>
                                <div>
                                    <label className="text-[14px] block font-semibold">Thông số kĩ thuật</label>

                                    <textarea
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0088d7]"

                                        cols={30}
                                        rows={4}
                                        {...register("specifications")}
                                    ></textarea>
                                    {errors.specifications && errors.specifications.message}
                                </div>
                                <div>
                                    <label className="text-[14px] block font-semibold">Mô tả</label>

                                    <textarea
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0088d7]"

                                        cols={30}
                                        rows={4}
                                        {...register("description")}
                                    ></textarea>
                                    {errors.description && errors.description.message}
                                </div>

                                <div className="mt-4">
                                    <button
                                        className="inline-block w-full rounded-lg bg-[#00B0D7] px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    </form >
}

export default AdminUpdate