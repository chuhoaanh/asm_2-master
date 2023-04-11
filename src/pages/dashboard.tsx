import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { deleteProduct, getAll } from "../api/product"
import { IProduct } from "../models"

const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const removeProduct = async (id: string) => {
        // console.log(id);

        const isConfirm = confirm('Ban co chac muon xoa khong?');
        if (isConfirm) {
            await deleteProduct(id)
            alert('Xoa thanh cong');
        }
    }
    return <>
        <div className="p-4">
            <h2 className="text-[24px] font-semibold mb-3">Product list</h2>


            <div className="mx-1 mb-3 text-end">
                <button className=" bg-blue-500 text-white rounded-md p-2 mx-10"><Link to="/admin/product/add">ADD+</Link></button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">


                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                    <thead>
                        <tr>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900"
                            >
                                #
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Tên sản phẩm
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Giá khuyến mãi
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Giá
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Hình ảnh
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Thao tác
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <Link to={`/admin/product/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price.toLocaleString()}</td>
                                {product.original_price !== undefined && (
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price.toLocaleString()}</td>
                                )}
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <img className="w-[100px]" src={product.images} alt="" />
                                </td>
                                <td className="text-center">

                                    <Link to="/admin/"><button onClick={() => removeProduct(product._id)} className="bg-red-500 text-white rounded-md p-2 mx-1">Delete</button></Link>
                                    <Link to={`product/edit/${product._id}`}><button className="bg-green-500 text-white rounded-md p-2 mx-1">Edit</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </>
}

export default Dashboard