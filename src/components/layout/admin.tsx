
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { ICategory, IUser, formSignup } from "../../models"
import { getCategory } from "../../api/Category"

const AdminLayout = () => {
    const [category, setCategory] = useState<ICategory[]>([])
    const [user, setUser] = useState<IUser>({} as IUser)
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("user") as string)
    const fetchCategory = async () => {
        const { data } = await getCategory();
        setCategory(data)
    }
    const showProducts = (id: string) => {
        if (id) {
            console.log(id);
        }
    }
    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
        if (userData) {
            if (userData.role !== 'admin') {
                navigate("/")
            }
        }
    }, [navigate])
    const logout = () => {
        localStorage.clear()
        navigate("/signin")
    }
    useEffect(() => {
        fetchCategory()
        setUser(userData)
    }, [])
    return <>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-2 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <div className="flex justify-center justify-items-center" >
                            <img className="w-[60px] " src="../../public/img/logo.png" alt="" />
                        </div>
                    </div>
                    <div className="">
                        <button onClick={() => logout()} className="">
                            <span className="flex-1 ml-3 whitespace-nowrap">Log out </span>
                            <i className="fa-solid fa-right-from-bracket text-[20px] mx-1 text-[#9297A2]"></i>

                        </button>

                    </div>
                </div>
            </div>
        </nav>

        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-bars text-[24px] text-[#9297A2]"></i>
                            <span className="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/admin/category" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-calendar-days text-[24px] text-[#9297A2]"></i>
                            <span className="flex-1 ml-3 whitespace-nowrap">Category</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </aside>

        <div className="pt-[77px] sm:ml-64">
            <Outlet />
        </div>

    </>
}

export default AdminLayout