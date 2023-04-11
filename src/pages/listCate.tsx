import { useEffect, useState } from "react"
import { ICategory, IProduct, IUser } from "../models"
import { deleteProduct, getAll } from "../api/product"
import { Link, useNavigate } from "react-router-dom"
import { deleteCategory, getCategory, getOneCategory } from "../api/Category"

const ListCate = () => {
    const [category, setCategory] = useState<ICategory[]>([])
    const navigate = useNavigate();

    const fetchCategory = async () => {
        const { data } = await getCategory();
        setCategory(data)
    }
    const removeCategory = async (id: string) => {
        const isConfirm = confirm('Ban co chac muon xoa khong?');
        if (isConfirm) {
            await deleteCategory(id)
            alert('Xoa thanh cong');
            // navigate(-1)
        }
    }
    useEffect(() => {
        fetchCategory()
    }, [])
    return <>
        <div className="p-4">
            <h2 className="text-[24px] font-semibold mb-3">Category list</h2>
            <div className="mx-1 mb-3 text-end">
                <button className=" bg-blue-500 text-white rounded-md p-2 mx-10"><Link to="/admin/category/add">ADD+</Link></button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 ">
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm ">
                    <thead>
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 w-[10%]" >
                                #
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900" >
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 w-[10%]" >
                                Thao tác
                            </th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {category.map((cate, index) => (
                            <tr key={index} >
                                <td className="text-center">{index + 1}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{cate.name}</td>
                                <td className="text-center">
                                    <Link to={`/admin/category`}><button onClick={() => removeCategory(cate._id)} className="bg-red-500 text-white rounded-md p-2 mx-1">Delete</button></Link>
                                    <Link to={`/admin/category/edit/${cate._id}`}> <button className="bg-green-500 text-white rounded-md p-2 mx-1">Edit</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >

    </>
}

export default ListCate